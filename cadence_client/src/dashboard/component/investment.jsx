import React from "react";
import DynamicTable from "./DynamicTable";
import PropTypes from "prop-types";

Investment.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
  getMetrics: PropTypes.func,
  toggleModal: PropTypes.func,
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
      {/* <NavLink
        to="/account/addinvestments"
        className="btn btn-warning pt-2 pb-2 pe-4 px-4 text-dark"
        aria-current="page"
        onClick={toggleModal()}
      >
        Create New Investment
      </NavLink> */}

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
            <button
              className="btn btn-warning pt-2 pb-2 pe-4 px-4 text-dark"
              onClick={props.toggleModal}
            >
              Create New Investment
            </button>
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
                  <br></br>
                  <br></br>
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
                  <br></br>
                  <br></br>
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
                  <br></br>
                  <br></br>
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
                  <small> in {System.UnitPeriod} Month</small>
                  <div>
                    <b>
                      + {(Number(System.roi) * 12) / Number(System.UnitPeriod)}%
                    </b>
                    <small> Anually </small>
                  </div>
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
    </div>
  );
}
