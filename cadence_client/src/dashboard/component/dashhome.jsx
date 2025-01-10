import React from "react";
import ChartView from "../component/chart";
import PropTypes from "prop-types";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

export default function DashHome(props) {
  const UserData = props.UserData.data.user;
  const InvestmentData = props.UserData.data.investments;
  const System = props.UserData.data.System;
  const ROI = props.UserData.data.roi;
  const metrics = props.getMetrics(InvestmentData.rows);

  // get all the roidate as an array from ROI object array
  let ROIdate = [];
  let ROIamount = [];

  for (let a = 0; a < ROI.length; a++) {
    const element = ROI[a];
    console.log(element);
    ROIdate.push(element.returnMonth);
    ROIamount.push(element.totalReturnAmount);
  }

  console.log(ROIdate);
  console.log(ROIamount);

  const data = {
    labels: ROIdate,

    datasets: [
      {
        label: "Return On Investment",
        data: ROIamount,
        fill: true,
        borderColor: "#ffc207",
        borderRadius: "5",
        backgroundColor: "rgb(232 177 7 / 55%)",
        tension: 0.3,
      },
    ],
  };

  // const percentage =
  //   (parseFloat(System.totalActiveAmount) / 100) * parseFloat(System.targetAmt);

  return (
    <div>
      <div className="container p-4">
        <div style={{ padding: "20px 0px" }}>
          <span style={{ fontSize: "25px" }}>
            👋 <b>Hi There!</b>
          </span>
          <br></br>
          <span style={{ fontSize: "17px" }}>
            Welcome to your dashboard, {UserData.FullName}.
          </span>
        </div>
      </div>
      {/* <div
        className="container  p-3 "
        style={{ minHeight: "", backgroundColor: "#e8c2075e" }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography gutterBottom variant="subtitle1">
            Investment Progress
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Investment Amount Raised: ₦
            {parseFloat(System.totalActiveAmount).toLocaleString()} /Total
            Investment Cap: ₦{parseFloat(System.targetAmt).toLocaleString()}{" "}
            (Investment opportunity with Cadence ends upon reaching the
            investment cap)
          </Typography>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{ marginTop: 1 }}
          />
        </Box>
      </div> */}
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
