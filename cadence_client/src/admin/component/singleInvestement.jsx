import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import InvestmentDetails from "./InvestmentDetails";

SingleInvestment.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
    token: PropTypes.string,
  }),
  getMetrics: PropTypes.func,
  BASEURL: PropTypes.string,
  match: PropTypes.object,
};

export default function SingleInvestment(props) {
  const [investmentData, setInvestmentData] = useState(null);
  const UserData = props.UserData.data.user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${props.BASEURL}api/v1/investments/${props.match.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.UserData.token}`,
            },
          }
        );

        if (!response.ok) {
          document.getElementById(
            "singleView"
          ).innerHTML = `<div class="text-center"><h1>OPPS!</h1><br><h4 class="text-center">Record Not Found</h4><span>This investment information is not found</span></div>`;

          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        result.data.BASEURL = props.BASEURL;
        result.data.UserToken = props.UserData.token;
        setInvestmentData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [props.BASEURL, props.UserData.token, props.match.id]);

  // const UserData = props.UserData.data.user;
  const InvestmentData = props.UserData.data.investments;
  const System = props.UserData.data.System;
  const metrics = props.getMetrics(InvestmentData.rows);
  console.log(System, metrics, UserData);

  return (
    <div>
      <div
        className="container bg-light mb-2 mt-2 "
        style={{ minHeight: "", paddingTop: "40px" }}
      >
        <div className="row ">
          <div className="col-lg-12 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>INVESTMENT DETAILS</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              Your investments information
            </span>
          </div>
        </div>
      </div>

      <div
        className="container mt-2 bg-light   "
        style={{ margin: "-1px" }}
        id="singleView"
      >
        {investmentData ? (
          <InvestmentDetails data={investmentData} />
        ) : (
          <CircularProgress color="inherit" />
        )}
      </div>
    </div>
  );
}
