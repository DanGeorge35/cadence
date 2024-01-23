import React, { Component } from "react";
import DynamicTable from "./DynamicTable";
class Account extends Component {
  render() {
    const tableHeaders = ["ID", "Name", "Location", "Age"];

    const tableData = [
      { ID: 1, Name: "John Doe", Location: "City A", Age: 25 },
      { ID: 2, Name: "Jane Smith", Location: "City B", Age: 30 },
      // Add more data as needed
    ];

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
}

export default Account;
