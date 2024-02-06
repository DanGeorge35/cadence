import React from "react";
import DynamicTable from "./DynamicTable";

import PropTypes from "prop-types";

Transactions.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
  getMetrics: PropTypes.func,
};
const TransEdit = (TransactionData) => {
  const metrics = {
    TotalInvAmount: 0,
    ActiveInvestment: 0,
    PendingInvestment: 0,
    TBheaders: [],
  };

  for (let i = 0; i < TransactionData.length; i++) {
    const element = TransactionData[i];

    ["createdAt", "updatedAt", "investorId", "investmentId", "photo"].forEach(
      (prop) => {
        if (Object.prototype.hasOwnProperty.call(TransactionData[i], prop)) {
          delete TransactionData[i][prop];
        }
      }
    );

    if (element.Status === "Active") {
      metrics.ActiveInvestment++;
      metrics.TotalInvAmount += Number(element.Amount);
    } else {
      metrics.PendingInvestment++;
    }
  }

  metrics.TBheaders = Object.keys(TransactionData[0] || {});
  return metrics;
};

export default function Transactions(props) {
  const TransactionData = props.UserData.data.transactions;
  const dTrans = TransEdit(TransactionData.rows);
  const tableHeaders = dTrans.TBheaders;
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
            <DynamicTable
              headers={tableHeaders}
              data={tableData}
              action=""
              actionType=""
              actionName=""
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
