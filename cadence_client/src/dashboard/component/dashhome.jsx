import React, { Component } from "react";
import ChartView from "../component/chart";

class DashHome extends Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Return On Investment",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: "#ffc207",
          tension: 0.3,
        },
      ],
    };
    return (
      <div>
        <div className="container p-4">
          <div style={{ padding: "20px 0px" }}>
            <span style={{ fontSize: "25px" }}>
              👋 <b>Hi There!</b>
            </span>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              Welcome to your dashboard, Dan George
            </span>
          </div>
        </div>

        <div className="container bg-light " style={{ minHeight: "" }}>
          <div className="row ">
            <div className="col-lg-4 p-3">
              <div
                className="  p-4"
                style={{ backgroundColor: "#fff", borderRadius: "20px" }}
              >
                <div className="row">
                  <div className="col-3">
                    <img src="/img/money.svg" alt="Total investment" />
                  </div>
                  <div className="col-9">
                    <div>Total Investment Amount</div>
                    <b> ₦600,000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div
                className="  p-4"
                style={{ backgroundColor: "#fff", borderRadius: "20px" }}
              >
                <div className="row">
                  <div className="col-3">
                    <img src="/img/investment.svg" alt="investment" />
                  </div>
                  <div className="col-9">
                    <div>Number of Investments</div>
                    <b>5</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div
                className="  p-4"
                style={{ backgroundColor: "#fff", borderRadius: "20px" }}
              >
                <div className="row">
                  <div className="col-3">
                    <img src="/img/returns.svg" alt="returns" />
                  </div>
                  <div className="col-9">
                    <div>Rate of Returns</div>
                    <b>+ 5.3 %</b>
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
}

export default DashHome;
