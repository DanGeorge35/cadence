import React from "react";
import ChartView from "../component/chart";
import PropTypes from "prop-types";

export default function DashHome(props) {
  const UserData = props.UserData.data.user;
  const InvestmentData = props.UserData.data.investments;
  const System = props.UserData.data.System;
  const metrics = props.getMetrics(InvestmentData.rows);
  const invChart = props.UserData.data.invChart || [];
  let invChartdate = [];
  let invChartamount = [];
  console.log(invChart);
  for (let a = 0; a < invChart.length; a++) {
    const element = invChart[a];
    console.log(element);
    invChartdate.push(element.MonthPeriod);
    invChartamount.push(element.TotalAmount);
  }

  console.log(invChartdate);
  console.log(invChartamount);

  const data = {
    labels: invChartdate,
    datasets: [
      {
        label: "Monthly Investment",
        data: invChartamount,
        fill: true,
        borderColor: "#ffc207",
        backgroundColor: "#e4ad069e",
        tension: 0.3,
      },
    ],
  };
  return (
    <div>
      <div className="container p-4">
        <div style={{ padding: "20px 0px" }}>
          <span style={{ fontSize: "25px" }}>
            👋 <b>Hello Admin!</b>
          </span>
          <br></br>
          <span style={{ fontSize: "17px" }}>
            Welcome to your dashboard, {UserData.FullName}.
          </span>
        </div>
      </div>

      <div className="container bg-light " style={{ minHeight: "" }}>
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
          <div className="col-lg-7">
            <ChartView data={data} />
          </div>
          <div className="col-lg-5">
            <img src="../img/goldcoin.jpg" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

DashHome.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
  getMetrics: PropTypes.func,
};
