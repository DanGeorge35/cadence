import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import DashHome from "../component/dashhome";
import Investment from "../component/investment";
import Transactions from "../component/transactions";

import SingleInvestment from "../component/singleInvestement";
import Account from "../component/account";
import Navs from "../component/navs";
import SideMenu from "../component/sideMenu";
import Menu from "../component/menu";

const Dashboard = ({ dashpage, BASEURL }) => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen((prevState) => !prevState);
  };

  const showAlert = (data) => {
    Swal.fire({
      title: data.title,
      text: data.text,
      icon: data.icon,
      confirmButtonText: data.button,
    });
  };

  const checkUser = async (formData) => {
    try {
      const response = await axios.post(
        `${BASEURL}api/v1/admin/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );
      response.data.credentials = formData;

      localStorage.setItem("LoginAdmin", JSON.stringify(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  const getMetrics = (InvestmentData) => {
    const metrics = {
      TotalInvAmount: 0,
      ActiveInvestment: 0,
      PendingInvestment: 0,
      TBheaders: [],
    };

    for (let i = 0; i < InvestmentData.length; i++) {
      const element = InvestmentData[i];

      ["createdAt", "updatedAt", "investorId"].forEach((prop) => {
        if (Object.prototype.hasOwnProperty.call(InvestmentData[i], prop)) {
          delete InvestmentData[i][prop];
        }
      });

      if (element.Status === "Active") {
        metrics.ActiveInvestment++;
        metrics.TotalInvAmount += Number(element.Amount);
      } else {
        metrics.PendingInvestment++;
      }
    }

    metrics.TBheaders = Object.keys(InvestmentData[0] || {});
    return metrics;
  };

  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("LoginAdmin")) {
      const LoginAdmin = JSON.parse(localStorage.getItem("LoginAdmin"));
      checkUser(LoginAdmin.credentials);
    }
  }, []);

  let DPage;

  if (localStorage.getItem("LoginAdmin")) {
    const LoginAdmin = JSON.parse(localStorage.getItem("LoginAdmin"));

    if (!dashpage) {
      dashpage = "DashHome";
    }

    switch (dashpage) {
      case "DashHome":
        DPage = <DashHome UserData={LoginAdmin} getMetrics={getMetrics} />;
        break;
      case "Investments":
        DPage = <Investment UserData={LoginAdmin} getMetrics={getMetrics} />;
        break;
      case "Transactions":
        DPage = <Transactions UserData={LoginAdmin} getMetrics={getMetrics} />;
        break;

      case "SingleInvestment":
        // eslint-disable-next-line no-case-declarations
        const match = { id };
        DPage = (
          <SingleInvestment
            UserData={LoginAdmin}
            BASEURL={BASEURL}
            getMetrics={getMetrics}
            match={match}
          />
        );
        break;
      case "profile":
        DPage = <Account UserData={LoginAdmin} getMetrics={getMetrics} />;
        break;
      default:
        break;
    }
  } else {
    return <Navigate to="/admin/signin" />;
  }

  return (
    <div className="container-fluid">
      <Navs toggleSideMenu={toggleSideMenu} />
      <SideMenu isOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
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
    </div>
  );
};

Dashboard.propTypes = {
  dashpage: PropTypes.string,
  BASEURL: PropTypes.string,
};

export default Dashboard;
