import React, { useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import PropTypes from "prop-types";

AddInvestment.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
    token: PropTypes.string,
  }),
  getMetrics: PropTypes.func,
  BASEURL: PropTypes.string,
};

export default function AddInvestment(props) {
  const UserData = props.UserData.data.user;
  const UserToken = props.UserData.token;

  const showAlert = (data) => {
    Swal.fire({
      title: data.title, //"suc cess",
      text: data.text, //"success",
      icon: data.icon, //"success",
      confirmButtonText: data.button,
    });
  };

  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFormFields = () => {
    setAmount("");
    setDuration("");
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (amount < 500000) {
      showAlert({
        title: "Invalid Amount",
        text: "Amount should be 500,000 or greater",
        icon: "error",
        button: "Ok",
      });
      return;
    }
    //Loading
    openBackdrop();
    const formData = {
      investorId: UserData.UserID,
      Amount: amount,
      Duration: duration,
    };
    try {
      const response = await axios.post(
        `${props.BASEURL}api/v1/investments`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UserToken}`,
          },
        }
      );

      console.log(response);

      showAlert({
        title: "Successfully submitted",
        text: "Investment submitted successfully",
        icon: "success",
        button: "Ok",
      });
      // go to /account/investments in 2 secs

      setTimeout(() => {
        window.location = "/account/investments";
      }, 2000);

      resetFormFields();
    } catch (error) {
      if (error.response) {
        let dmsg = "";
        if (error.response.data.message) {
          dmsg = error.response.data.message;
        } else {
          dmsg = error.response.data;
        }
        return showAlert({
          title: "Error",
          text: dmsg,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        return showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
      }
    } finally {
      closeBackdrop();
    }
  };

  // const UserData = props.UserData.data.user;
  const InvestmentData = props.UserData.data.investments;
  const System = props.UserData.data.System;
  const metrics = props.getMetrics(InvestmentData.rows);
  console.log(System, metrics);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div
        className="container bg-light mb-4 "
        style={{ minHeight: "", paddingTop: "40px" }}
      >
        <div className="row ">
          <div className="col-lg-8 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>Create New Investment</b>
            <br></br>
          </div>
          <div className="col-lg-4 p-4 bg-white text-center "></div>
        </div>
      </div>

      <div className="container   mt-5 " style={{ margin: "-1px" }}>
        <div className="row ">
          <div className="col-lg-6  bg-light ">
            <div
              className="pb-4 "
              style={{
                border: "2px solid #ffc107",
                overflow: "hidden",
                borderRadius: "5px 5px 0px 0px",
              }}
            >
              <div className="bg-warning p-1 text-white text-center mb-3">
                <b>Add new Investment </b>
              </div>
              <div className="pe-3 px-3">
                <form onSubmit={handleFormSubmission} className="">
                  <div className="mb-3">
                    <label htmlFor="inputAmount" className="form-label">
                      Investment Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputAmount"
                      min="250000"
                      max="5000000"
                      placeholder="250,000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      style={{ color: "black !important" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="inputDuration" className="form-label">
                      Investment Duration
                    </label>
                    <select
                      id="inputDuration"
                      className="form-control"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <option value="0" defaultValue>
                        -- Select Duration
                      </option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-warning w-100">
                    Submit Investment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
