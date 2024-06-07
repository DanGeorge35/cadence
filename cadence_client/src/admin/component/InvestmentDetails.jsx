import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Icons from "@mui/icons-material";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import DynamicTable from "./DynamicTable";

const ROIEdit = (ROIData) => {
  const metrics = {
    TBheaders: [],
  };

  for (let i = 0; i < ROIData.length; i++) {
    [
      "createdAt",
      "updatedAt",
      "investorId",
      "investmentId",
      "returnDate",
    ].forEach((prop) => {
      if (Object.prototype.hasOwnProperty.call(ROIData[i], prop)) {
        delete ROIData[i][prop];
      }
    });
  }

  metrics.TBheaders = Object.keys(ROIData[0] || {});
  return metrics;
};

const FirstView = ({ data }) => {
  let bgStatus = "bg-success";

  if (data.Status === "Pending") {
    bgStatus = "bg-warning";
  } else if (data.Status === "Awaiting Approval") {
    bgStatus = "bg-info";
  } else if (data.Status === "Disapproved") {
    bgStatus = "bg-danger";
  }
  return (
    <div className="container pe-4  pt-4 pb-4 border border-1 px-4">
      <div className="row">
        <div className="col-6">
          <div className="" style={{ textAlign: "left" }}>
            <div>Amount</div>
            <b style={{ fontSize: "20px" }}>
              ₦ {Number(data.Amount).toLocaleString()}
            </b>
          </div>
        </div>
        <div className="col-6">
          <div style={{ textAlign: "right" }}>
            <div> Status</div>
            <span
              className={`badge badge-pill ${bgStatus}`}
              style={{ fontSize: "17px" }}
            >
              {data.Status}
            </span>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="" style={{ textAlign: "left" }}>
            <div>Duration</div>
            <b style={{ fontSize: "20px" }}>
              {Number(data.Duration).toLocaleString()} Year(s)
            </b>
          </div>
        </div>
        <div className="col-lg-6 ">
          <hr className="d-block d-md-none d-lg-none" />
          <div style={{ textAlign: "right" }}>
            <div> Investor ID</div>
            <span
              className="badge badge-pill bg-secondary"
              style={{ fontSize: "17px" }}
            >
              {data.investorId}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvestmentDetails = ({ data }) => {
  const showAlert = (content) => {
    Swal.fire({
      title: content.title, //"suc cess",
      text: content.text, //"success",
      icon: content.icon, //"success",
      confirmButtonText: content.button,
    });
  };

  const dTrans = ROIEdit(data.ROIs);
  const tableHeaders = dTrans.TBheaders;
  const tableData = data.ROIs;

  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform any form submission logic here, e.g., send data to a server
    document.getElementById("approvebtn").disabled = "true";
    const BASEURL = data.BASEURL;
    //Loading
    openBackdrop();
    const formData = {
      investmentId: data.id,
    };

    try {
      const response = await axios.post(
        `${BASEURL}api/v1/investments/approve`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.UserToken}`,
          },
        }
      );

      console.log(response);
      closeBackdrop();
      showAlert({
        title: "Investment Approved",
        text: "Investment successfully approved",
        icon: "success",
        button: "Ok",
      });
      //set 2 seconds timeout and reload
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
        setTimeout(() => window.location.reload(), 1000);
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
        setTimeout(() => window.location.reload(), 1000);
      }
    } finally {
      closeBackdrop();
    }

    // Reset the form fields
  };

  const handleRejectSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform any form submission logic here, e.g., send data to a server
    document.getElementById("approvebtn").disabled = "true";
    const BASEURL = data.BASEURL;
    //Loading
    openBackdrop();
    const formData = {
      investmentId: data.id,
    };

    try {
      const response = await axios.post(
        `${BASEURL}api/v1/investments/reject`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.UserToken}`,
          },
        }
      );

      console.log(response);
      closeBackdrop();
      showAlert({
        title: "Investment Rejected",
        text: "Investment successfully Rejected",
        icon: "success",
        button: "Ok",
      });
      //set 2 seconds timeout and reload
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
        setTimeout(() => window.location.reload(), 1000);
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
        setTimeout(() => window.location.reload(), 1000);
      }
    } finally {
      closeBackdrop();
    }

    // Reset the form fields
  };

  if (data === null) {
    return (
      <div>
        <h1 className="text-center mt-4">404</h1>
        <p className="lead text-muted text-center mb-4">Record not found.</p>
      </div>
    );
  }

  if (data.Status === "Active") {
    return (
      <div>
        <FirstView data={data} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <DynamicTable
          headers={tableHeaders}
          data={tableData}
          action=""
          actionType=""
          actionName=""
        />
      </div>
    );
  } else if (data.Status === "Awaiting Approval") {
    return (
      <div>
        <FirstView data={data} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div
          className="container bg-white mt-4  pt-3 pb-5"
          style={{ borderRadius: "10px" }}
        >
          <br />
          <h4>Payment Proof</h4>
          <br />

          <div className="row">
            <div
              className="col-lg-4 text-center"
              style={{ wordBreak: "break-all" }}
            >
              <div>
                <a
                  href={data.Transactions.photo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info  w-100  text-white"
                >
                  <Icons.Link style={{ fontSize: "50px" }} />
                  <span className="mx-3">View Your Payment Proof</span>
                </a>
                <br />
                <br />
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <button
                onClick={handleFormSubmission}
                className="btn btn-success  p-4 text-white w-100 "
                id="approvebtn"
              >
                <Icons.CheckCircle style={{ fontSize: "30px" }} />
                <span className="mx-3">Approve Investment</span>
              </button>
              <br />
              <br />
            </div>
            <div className="col-lg-4 text-center">
              <button
                onClick={handleRejectSubmission}
                className="btn btn-danger  p-4 text-white w-100 d-block"
              >
                <Icons.CloseRounded style={{ fontSize: "30px" }} />
                <span className="mx-3">Reject Investment</span>
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (data.Status === "Pending") {
    return (
      <div>
        <FirstView data={data} />
      </div>
    );
  } else if (data.Status === "Disapproved") {
    return (
      <div>
        <FirstView data={data} />
      </div>
    );
  }
};

InvestmentDetails.propTypes = {
  data: PropTypes.shape({
    Amount: PropTypes.string,
    Duration: PropTypes.string,
    Status: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.number,
    investorId: PropTypes.string,
    updatedAt: PropTypes.string,
    BASEURL: PropTypes.string,
    UserToken: PropTypes.string,
    Transactions: PropTypes.object,
    ROIs: PropTypes.object,
  }),
};
FirstView.propTypes = {
  data: PropTypes.shape({
    Amount: PropTypes.string,
    Duration: PropTypes.string,
    Status: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.number,
    investorId: PropTypes.string,
    updatedAt: PropTypes.string,
    BASEURL: PropTypes.string,
    UserToken: PropTypes.string,
    Transactions: PropTypes.object,
    ROIs: PropTypes.object,
  }),
};

export default InvestmentDetails;
