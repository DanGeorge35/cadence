import React from "react";
import DynamicTable from "./DynamicTable";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

Investment.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
  getMetrics: PropTypes.func,
};

export default function Investment(props) {
  // const UserData = props.UserData.data.user;
  const InvestmentData = props.UserData.data.investments;
  const System = props.UserData.data.System;
  const metrics = props.getMetrics(InvestmentData.rows);
  const tableHeaders = metrics.TBheaders;
  const tableData = InvestmentData.rows;

  return (
    <div>
      <div
        className="container bg-light "
        style={{ minHeight: "", paddingTop: "40px" }}
      >
        <div className="row ">
          <div className="col-lg-6 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>INVESTMENT</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              Track your investment journey: Total Invested | Investment
              Duration | Returns
            </span>
          </div>
          <div className="col-lg-6 p-4 bg-white text-center ">
            <NavLink
              to="/account/addinvestments"
              className="btn btn-warning pt-2 pb-2 pe-4 px-4 text-dark"
              aria-current="page"
            >
              Create New Investment
            </NavLink>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-3 p-3">
            <div
              className="  p-4"
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
            >
              <div className="row">
                <div className="col-3">
                  <img src="/img/money.svg" alt="Total investment" />
                </div>
                <div className="col-9">
                  <div style={{ fontSize: "14px" }}>Investment Amount</div>
                  <b> ₦{metrics.TotalInvAmount.toLocaleString()}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div
              className="  p-4"
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
            >
              <div className="row">
                <div className="col-3">
                  <img src="/img/investment.svg" alt="investment" />
                </div>
                <div className="col-9">
                  <div style={{ fontSize: "14px" }}>Active Investments</div>
                  <b>{metrics.ActiveInvestment}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div
              className="  p-4"
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
            >
              <div className="row">
                <div className="col-3">
                  <img src="/img/investment.svg" alt="investment" />
                </div>
                <div className="col-9">
                  <div style={{ fontSize: "14px" }}>Pending Investments</div>
                  <b>{metrics.PendingInvestment}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 p-3">
            <div
              className="  p-4"
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
            >
              <div className="row">
                <div className="col-3">
                  <img src="/img/returns.svg" alt="returns" />
                </div>
                <div className="col-9">
                  <div style={{ fontSize: "14px" }}>Rate of Returns</div>
                  <b>+ {System.roi} %</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-4" style={{}}>
        <div className="row">
          <div className="col-lg-12">
            <DynamicTable
              headers={tableHeaders}
              data={tableData}
              action="/account/singleinvestments/"
              actionType="link"
              actionName="View"
            />
          </div>
        </div>
      </div>
      <div
        className="container  mt-4 p-lg-5 p-4"
        style={{ backgroundColor: "#eee" }}
      >
        <h2>Please take note!</h2>
        <div>
          <p>
            Minimum investment allowed is N250,000 and a maximum of N5,000,000
            per individual.
          </p>
          Minimum investment duration is 1 year and the maximum investment
          duration is 5 years. <br></br>Capital can only be wthdrawn at the end
          of the chosen investment tenure. In case of a verified emergency,
          capital may be withdrawn within 7 days (terms and conditions apply).
          <br></br>
          <br></br>
          Return on Investment (ROI) can only be withdrawn quarterly. Cadence
          presently provides a 50% annual return on investment (ROI), which may
          be subject to periodic review at the discretion of Cadence.<br></br>
          Opportunity to invest with Cadence ceases upon reaching our investment
          cap. However, potential investors who miss out on investing with
          Cadence may join the waiting list. Existing investors looking to exit
          before their investment term expires will have the chance to sell and
          transfer their investment to any interested investor on the waiting
          list.
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
