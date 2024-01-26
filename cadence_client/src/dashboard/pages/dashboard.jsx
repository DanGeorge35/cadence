import React, { Component } from "react";
import DashHome from "../component/dashhome";
import Investment from "../component/investment";
import Transactions from "../component/transactions";
import Account from "../component/account";
import Navs from "../component/navs";
import SideMenu from "../component/sideMenu";
import Menu from "../component/menu";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isSideMenuOpen: false,
    };
  }

  toggleSideMenu = () => {
    this.setState((prevState) => ({
      isSideMenuOpen: !prevState.isSideMenuOpen,
    }));
  };

  showAlert = (data) => {
    Swal.fire({
      title: data.title, //"success",
      text: data.text, //"success",
      icon: data.icon, //"success",
      confirmButtonText: data.button,
    });
  };

  checkUser = async (formData) => {
    try {
      const response = await axios.post(
        `${this.props.BASEURL}api/v1/investors/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );
      response.data.credentials = formData;

      localStorage.setItem("LoginUser", JSON.stringify(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        this.showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  getMetrics(InvestmentData) {
    const metrics = {};

    let TotalInVAmount = 0;
    let ActiveInvestment = 0;
    let PendingInvestment = 0;

    for (let i = 0; i < InvestmentData.length; i++) {
      const element = InvestmentData[i];

      if (
        Object.prototype.hasOwnProperty.call(InvestmentData[i], "createdAt")
      ) {
        delete InvestmentData[i]["createdAt"];
      }
      if (
        Object.prototype.hasOwnProperty.call(InvestmentData[i], "updatedAt")
      ) {
        delete InvestmentData[i]["updatedAt"];
      }

      if (
        Object.prototype.hasOwnProperty.call(InvestmentData[i], "investorId")
      ) {
        delete InvestmentData[i]["investorId"];
      }

      if (
        Object.prototype.hasOwnProperty.call(InvestmentData[i], "investorId")
      ) {
        delete InvestmentData[i]["investorId"];
      }

      if (element.Status === "Active") {
        ActiveInvestment++;
        TotalInVAmount += Number(element.Amount);
      } else {
        PendingInvestment++;
      }
    }

    metrics.TotalInvAmount = TotalInVAmount;
    metrics.ActiveInvestment = ActiveInvestment;
    metrics.PendingInvestment = PendingInvestment;
    metrics.TBheaders = Object.keys(InvestmentData[0] || {});

    return metrics;
  }

  render() {
    const { isSideMenuOpen } = this.state;
    let { dashpage } = this.props;
    let DPage;
    if (localStorage.getItem("LoginUser")) {
      const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));

      this.checkUser(LoginUser.credentials);
      if (!dashpage) {
        dashpage = "DashHome";
      }
      if (dashpage === "DashHome") {
        DPage = <DashHome UserData={LoginUser} getMetrics={this.getMetrics} />;
      } else if (dashpage === "Investments") {
        DPage = (
          <Investment UserData={LoginUser} getMetrics={this.getMetrics} />
        );
      } else if (dashpage === "Transactions") {
        DPage = (
          <Transactions UserData={LoginUser} getMetrics={this.getMetrics} />
        );
      } else if (dashpage === "profile") {
        DPage = <Account UserData={LoginUser} getMetrics={this.getMetrics} />;
      }
    } else {
      return <Navigate to="/signin" />;
    }

    return (
      <div className="container-fluid">
        <Navs toggleSideMenu={this.toggleSideMenu} />
        <SideMenu
          isOpen={isSideMenuOpen}
          toggleSideMenu={this.toggleSideMenu}
        />
        <div className="dashcontainer row">
          <div
            className="col-md-3 bg-dark px-0 d-none d-lg-block"
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
  dashpage: PropTypes.string,
  BASEURL: PropTypes.string,
};

export default Dashboard;
