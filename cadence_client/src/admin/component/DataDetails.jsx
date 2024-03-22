import React from "react";
import PropTypes from "prop-types";
// import * as Icons from "@mui/icons-material";

const dataStructure = (data) => {
  const record = {};

  console.log(data);
  // console.log(data);

  record.tabs = Object.keys(data).map((key) => {
    return key + " Data";
  });
  console.log(record.tabs);

  record.TBheaders = Object.keys(data[0] || {});

  return record;
};

const DataDetails = ({ data }) => {
  const dTrans = dataStructure(data);
  const tableHeaders = dTrans.TBheaders;
  const tableData = data.ROIs;
  console.log(tableHeaders, tableData);

  if (data === null) {
    return (
      <div>
        <h1 className="text-center mt-4">404</h1>
        <p className="lead text-muted text-center mb-4">Record not found.</p>
      </div>
    );
  }

  return (
    <div className="p-3 border">
      <div
        className="container  mt-4  pb-4 Tab"
        style={{ borderRadius: "10px" }}
      >
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link tab active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div
          className="tab-content "
          id="pills-tabContent"
          style={{ marginTop: "35px" }}
        >
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

DataDetails.propTypes = {
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

export default DataDetails;
