import React, { Component } from "react";
import DashHome from "../component/dashhome";
import Investment from "../component/investment";
import Transactions from "../component/transactions";
import Header from "../component/header";
import Menu from "../component/menu";
import PropTypes from "prop-types";

// import Footer from "components/footer";
class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    const { dashpage } = this.props;
    let DPage;
    if (dashpage === "DashHome") {
      DPage = <DashHome />;
    } else if (dashpage === "Investments") {
      DPage = <Investment />;
    } else if (dashpage === "Transactions") {
      DPage = <Transactions />;
    }
    return (
      <div className="container-fluid">
        <Header />
        <div className="dashcontainer row">
          <div
            className="col-md-3 bg-dark px-0"
            style={{ height: "100vh", paddingTop: "80px" }}
          >
            <Menu />
          </div>

          <div
            className="col-md-9 px-0"
            style={{ height: "100vh", paddingTop: "50px", overflowY: "auto" }}
          >
            {DPage}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}
Dashboard.propTypes = {
  dashpage: PropTypes.string.name, // Make sure it's a function and required
};
export default Dashboard;
