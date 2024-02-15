import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import DashHome from "../component/dashhome";
import Investment from "../component/investment";
import Transactions from "../component/transactions";
import AddInvestment from "../component/addInvestement";
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
        `${BASEURL}api/v1/investors/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );
      response.data.credentials = formData;
      // console.log(formData, response.data);
      localStorage.setItem("LoginUser", JSON.stringify(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
        window.location = "/logout";
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
    if (localStorage.getItem("LoginUser")) {
      const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));
      checkUser(LoginUser.credentials);
    }
  }, []);

  let DPage;

  if (localStorage.getItem("LoginUser")) {
    const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));

    if (!dashpage) {
      dashpage = "DashHome";
    }

    if (
      LoginUser.data.user.Gender == null ||
      LoginUser.data.user.NOKFullName == null ||
      LoginUser.data.user.NOKFullName == null
    ) {
      DPage = (
        <Account
          UserData={LoginUser}
          BASEURL={BASEURL}
          getMetrics={getMetrics}
        />
      );
      showAlert({
        title: "Incomplete  Profile",
        text: "Please complete your account profile to access the full functionality of this platform",
        icon: "error",
        button: "Account Settings",
      });
    } else {
      switch (dashpage) {
        case "DashHome":
          DPage = <DashHome UserData={LoginUser} getMetrics={getMetrics} />;
          break;
        case "Investments":
          DPage = <Investment UserData={LoginUser} getMetrics={getMetrics} />;
          break;
        case "Transactions":
          DPage = <Transactions UserData={LoginUser} getMetrics={getMetrics} />;
          break;
        case "AddInvestment":
          DPage = (
            <AddInvestment
              UserData={LoginUser}
              BASEURL={BASEURL}
              getMetrics={getMetrics}
            />
          );
          break;
        case "SingleInvestment":
          // eslint-disable-next-line no-case-declarations
          const match = { id };
          DPage = (
            <SingleInvestment
              UserData={LoginUser}
              BASEURL={BASEURL}
              getMetrics={getMetrics}
              match={match}
            />
          );
          break;
        case "profile":
          DPage = (
            <Account
              UserData={LoginUser}
              BASEURL={BASEURL}
              getMetrics={getMetrics}
            />
          );
          break;
        default:
          break;
      }
    }
  } else {
    return <Navigate to="/signin" />;
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
