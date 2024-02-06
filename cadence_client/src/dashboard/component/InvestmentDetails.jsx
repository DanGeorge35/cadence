import React, { useState } from "react";
import PropTypes from "prop-types";
import DynamicTable from "./DynamicTable";
import * as Icons from "@mui/icons-material";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

const FirstView = ({ data }) => {
  let bgStatus = "bg-success";

  if (data.Status === "Pending") {
    bgStatus = "bg-warning";
  } else if (data.Status === "Awaiting Approval") {
    bgStatus = "bg-info";
  } else if (data.Status === "Terminated") {
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

const InvestmentDetails = ({ data }) => {
  const dTrans = ROIEdit(data.ROIs);
  const tableHeaders = dTrans.TBheaders;
  const tableData = data.ROIs;

  const [paymentImage, setPaymentImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setPaymentImage(file);
  };

  const showAlert = (content) => {
    Swal.fire({
      title: content.title, //"suc cess",
      text: content.text, //"success",
      icon: content.icon, //"success",
      confirmButtonText: content.button,
    });
  };

  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  const uploadPaymentProof = async () => {
    // Check if a file is selected
    if (!paymentImage) {
      alert("Please select a file.");
      return;
    }

    setIsUploading(true);

    openBackdrop();
    const formData = new FormData();
    formData.append("investorId", data.investorId);
    formData.append("amount", data.Amount);
    formData.append("investmentId", data.id);
    formData.append("photo", paymentImage);
    formData.append("purpose", "Buy Investment");

    console.log(formData);
    try {
      const response = await axios.post(
        `${data.BASEURL}api/v1/transactions`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${data.UserToken}`,
          },
        }
      );
      console.log("YES");
      console.log(response);

      showAlert({
        title: "Successfully Uploaded",
        text: "Payment proof submitted successfully",
        icon: "success",
        button: "Ok",
      });

      //Set a time out of 5 sec and then refresh
      setTimeout(() => {
        window.location.reload();
      }, 2000);
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
      setPaymentImage(null);
      setIsUploading(false);
    }
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
            <div className="col-lg-6 text-center">
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
            <div className="col-lg-6 text-center">
              <button
                className="btn btn-success btn-large  w-100 text-white"
                id="approvebtn"
              >
                <Icons.WhatsApp style={{ fontSize: "50px" }} />
                <span className="mx-3">Chat Our Representative</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (data.Status === "Pending") {
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
          <div className="text-center bg-warning pt-3 pb-3">
            <h4 className="text-center">Make Payment</h4>
            <span>
              Transfer your investment amount to the following Cadence bank
              account:
            </span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" p-3 " style={{ fontSize: "15px" }}>
                <table className="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <td>Bank Name</td>
                      <td>
                        <b>MONIEPOINT</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Account Name</td>
                      <td>
                        <b> CADENCE CAFE</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Account Number</td>
                      <td>
                        <b>5356651057</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6 text-center ">
              <form className="p-3 border border-bottom border-2">
                <label className="form-label">Upload Proof of Payment</label>
                <br />
                <div className="input-group mb-3">
                  <input
                    type="file"
                    onChange={handleFileInputChange}
                    className="form-control"
                    id="inputGroupFile02"
                  />

                  <button
                    onClick={uploadPaymentProof}
                    disabled={!paymentImage || isUploading}
                    className="btn btn-primary mt-2"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
