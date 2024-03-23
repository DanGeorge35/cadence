import React, { useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery"; // Import jQuery
import "datatables.net-autofill-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.colVis.mjs";
import "datatables.net-buttons/js/buttons.html5.mjs";
import "datatables.net-buttons/js/buttons.print.mjs";
import "datatables.net-scroller-bs5";

// import * as Icons from "@mui/icons-material";

const dataStructure = (data) => {
  const record = {};

  console.log(data);
  // console.log(data);
  record.tabs = [];

  record.TBheaders = {};
  record.TBdata = {};
  Object.keys(data).forEach((key) => {
    record.tabs.push(key);
    const dataContent = data[key];

    if (dataContent.length > 0) {
      console.log(dataContent[0]);
      record.TBheaders[key] = Object.keys(dataContent[0]);
      record.TBdata[key] = dataContent;
    } else {
      record.TBheaders[key] = [];
      record.TBdata[key] = [];
    }
  });

  return record;
};

const DataDetails = ({ data }) => {
  const dTrans = dataStructure(data);
  const Tab = dTrans.tabs;
  const TBheaders = dTrans.TBheaders;
  const TBdata = dTrans.TBdata;
  console.log(Tab);
  console.log(TBheaders);
  console.log(TBdata);

  if (data === null) {
    return (
      <div>
        <h1 className="text-center mt-4">404</h1>
        <p className="lead text-muted text-center mb-4">Record not found.</p>
      </div>
    );
  }

  useEffect(() => {
    $(".thisdatatable").DataTable({
      buttons: ["copy", "csv", "excel", "pdf", "print"],
      dom: "Bfrtip", // Specify the location of the DataTable Buttons
    });
  }, []);

  return (
    <div className="p-3 border">
      <div
        className="container  mt-4  pb-4 Tab"
        style={{ borderRadius: "10px" }}
      >
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {Tab.map((item, index) => (
            <li key={index} className="nav-item" role="presentation">
              <button
                className={`nav-link tab ${index === 0 ? "active" : ""}`}
                id={`pills-${index}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${index}`}
                type="button"
                role="tab"
                aria-controls={`pills-${index}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div
          className="tab-content "
          id="pills-tabContent"
          style={{ marginTop: "35px" }}
        >
          {Tab.map((item, index) => (
            <div
              key={index}
              className={`tab-pane fade   ${index === 0 ? " show active" : ""}`}
              id={`pills-${index}`}
              role="tabpanel"
              aria-labelledby={`pills-${index}-tab`}
            >
              <table className="display nowrap table  thisdatatable table-striped table-auto ">
                <thead>
                  <tr>
                    {TBheaders[item] &&
                      TBheaders[item].map((headerItem, idx) => (
                        <th key={idx}>{headerItem}</th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {TBdata[item] &&
                    TBdata[item].map((rowData, rowIndex) => (
                      <tr key={rowIndex}>
                        {TBheaders[item].map((headerItem, columnIndex) => (
                          <td key={columnIndex}>{rowData[headerItem]}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
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
