import React from "react";
import DynamicTable from "./DynamicTable";

import PropTypes from "prop-types";

Transactions.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
  getMetrics: PropTypes.func,
};

export default function Transactions(props) {
  const TransactionData = props.UserData.data.transactions;
  const tableHeaders = Object.keys(TransactionData[0] || {});
  const tableData = TransactionData.rows;

  return (
    <div>
      <div
        className="container bg-light "
        style={{ minHeight: "", paddingTop: "40px" }}
      >
        <div className="row ">
          <div className="col-lg-12 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>TRANSACTIONS</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              All your transactions, both the cash you sent for investment and
              the ones you recieved as ROI
            </span>
          </div>
        </div>
      </div>
      <div className="container  mt-4" style={{}}>
        <div className="row">
          <div className="col-lg-12">
            <DynamicTable headers={tableHeaders} data={tableData} />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
