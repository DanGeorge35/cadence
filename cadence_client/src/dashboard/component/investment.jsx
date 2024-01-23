import React, { Component } from "react";
import DynamicTable from "./DynamicTable";
class Investment extends Component {
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
            <div className="col-lg-6 p-3 bg-white ">
              <b style={{ fontSize: "25px" }}>INVESTMENT</b>
              <br></br>
              <span style={{ fontSize: "17px" }}>
                All you investments, your total investment amount and return on
                investment
              </span>
            </div>
            <div className="col-lg-6 p-4 bg-white ">
              <button
                className="btn btn-secondary pt-2 pb-2 pe-4 px-4 text-light"
                style={{ float: "right" }}
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
                    <div>Total Amount</div>
                    <b> ₦600,000</b>
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
                    <div>Active </div>
                    <b>5</b>
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
                    <div>Pending </div>
                    <b>5</b>
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
                    <div>Profit Returns</div>
                    <b> ₦200,000</b>
                  </div>
                </div>
              </div>
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

export default Investment;
