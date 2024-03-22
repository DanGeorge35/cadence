import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import DataDetails from "./DataDetails";

DataRecord.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
    token: PropTypes.string,
  }),
  BASEURL: PropTypes.string,
};

export default function DataRecord(props) {
  const [DataRecords, setData] = useState(null);
  // const UserData = props.UserData.data.user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${props.BASEURL}api/v1/admin/datarecord/`,
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
          ).innerHTML = `<div class="text-center"><h1>OPPS!</h1><br><h4 class="text-center">Record Not Found</h4></div>`;

          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [props.BASEURL, props.UserData.token]);

  // const UserData = props.UserData.data.user;
  // const DataRecords = props.UserData.data.investments;

  return (
    <div>
      <div
        className="container bg-light mb-2 mt-2 "
        style={{ minHeight: "", paddingTop: "40px" }}
      >
        <div className="row ">
          <div className="col-lg-12 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>Data Record</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              All data record information
            </span>
          </div>
        </div>
      </div>

      <div
        className="container mt-2 bg-light   "
        style={{ margin: "-1px" }}
        id="singleView"
      >
        {DataRecords ? (
          <DataDetails data={DataRecords} />
        ) : (
          <div style={{ textAlign: "center", padding: "60px" }}>
            <CircularProgress color="inherit" />
            <br></br>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
