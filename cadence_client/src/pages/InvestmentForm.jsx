import React, { useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import PropTypes from "prop-types";

const InvestmentForm = (props) => {
  const showAlert = (data) => {
    Swal.fire({
      title: data.title, //"success",
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

  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [fullnameNOK, setFullnameNOK] = useState("");
  const [relationshipNOK, setRelationshipNOK] = useState("");
  const [phoneNOK, setPhoneNOK] = useState("");
  const [emailNOK, setEmailNOK] = useState("");
  const [addressNOK, setAddressNOK] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFormFields = () => {
    setFullname("");
    setGender("");
    setNationality("");
    setAddress("");
    setState("");
    setCity("");
    setPhone("");
    setEmail("");
    setAmount("");
    setDuration("");
    setFullnameNOK("");
    setRelationshipNOK("");
    setPhoneNOK("");
    setEmailNOK("");
    setAddressNOK("");
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    //Loading
    openBackdrop();
    const formData = {
      FullName: fullname,
      Gender: gender,
      Nationality: nationality,
      Address: address,
      City: city,
      State: state,
      Phone: phone,
      Email: email,
      Amount: amount,
      Duration: duration,
      NOKFullName: fullnameNOK,
      NOKRelationship: relationshipNOK,
      NOKPhone: phoneNOK,
      NOKEmail: emailNOK,
      NOKAddress: addressNOK,
    };
    try {
      const response = await axios.post(
        `${props.BASEURL}api/v1/investors`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      console.log(response);

      showAlert({
        title: "Successfully Registered",
        text: "Data submitted successfully",
        icon: "success",
        button: "Ok",
      });
      resetFormFields();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        showAlert({
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

  return (
    <div>
      <Header />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div style={{ height: "80px" }}></div>
      <div
        className=" text-white"
        style={{ backgroundColor: "#001119f9", paddingTop: "40px" }}
      >
        <h1 className="pt-5 pb-5 text-center">
          Cadence Investment: 50% annual ROI
        </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <form onSubmit={handleFormSubmission} className="invesmentform">
                <div className="pb-4">
                  <label className="tag">Personal Information</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputFullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    aria-describedby="fullnameHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputGender" className="form-label">
                    Gender
                  </label>
                  <select
                    id="inputGender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" defaultValue>
                      -- Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputNationality" className="form-label">
                    Nationality
                  </label>
                  <select
                    id="inputNationality"
                    className="form-control"
                    value={nationality}
                    onChange={(e) =>
                      setNationality(
                        e.target.value === "Other" ? "" : e.target.value
                      )
                    }
                  >
                    <option value="" disabled defaultValue>
                      -- Select Nationality
                    </option>
                    <option value="Nigerian">Nigerian</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputState" className="form-label">
                    State:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputState"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCity" className="form-label">
                    City:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailaddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="pt-4 pb-4">
                  <label className="tag">Investment Information</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputAmount" className="form-label">
                    Investment Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAmount"
                    min="500000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
                  </select>
                </div>

                <div className="pt-4 pb-4">
                  <label className="tag">Next of Kin Information</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputFullnameNOK" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFullnameNOK"
                    value={fullnameNOK}
                    onChange={(e) => setFullnameNOK(e.target.value)}
                    aria-describedby="fullnameHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputRelationship" className="form-label">
                    Relationship with Next of Kin:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputRelationship"
                    value={relationshipNOK}
                    onChange={(e) => setRelationshipNOK(e.target.value)}
                    aria-describedby="relationshipHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhoneNOK" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhoneNOK"
                    value={phoneNOK}
                    onChange={(e) => setPhoneNOK(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailaddressNOK" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailaddressNOK"
                    value={emailNOK}
                    onChange={(e) => setEmailNOK(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputAddressNOK" className="form-label">
                    Address of Next of Kin
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddressNOK"
                    value={addressNOK}
                    onChange={(e) => setAddressNOK(e.target.value)}
                  />
                </div>
                <p className="p-3"></p>

                <button type="submit" className="btn btn-warning w-100">
                  Submit
                </button>
                <p className="p-5"></p>
                <p className="p-5"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
InvestmentForm.propTypes = {
  BASEURL: PropTypes.string,
};

export default InvestmentForm;
