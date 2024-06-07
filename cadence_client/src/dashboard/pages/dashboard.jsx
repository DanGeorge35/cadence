import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Icons from "@mui/icons-material";
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
import Modal from "../component/modal";

const Dashboard = ({ dashpage, BASEURL }) => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setModalOpen((prevIsModalOpen) => !prevIsModalOpen);
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

  const investmentInfo = (
    <div>
      <div>
        <p>
          Minimum investment allowed is N100,000 and a maximum of N5,000,000 per
          individual.
        </p>
        Minimum investment duration is 1 year and the maximum investment
        duration is 5 years. <br></br>
        <br></br>Capital can only be withdrawn at the end of the chosen
        investment tenure. In case of a verified emergency, capital may be
        withdrawn within 7 days (terms and conditions apply).
        <br></br>
        <br></br>
        Return on Investment (ROI) can only be withdrawn monthly.
        <br></br>
        <br></br> Cadence presently provides a 50% annual return on investment
        (ROI), which may be subject to periodic review at the discretion of
        Cadence.<br></br>
        <br></br>
        Opportunity to invest with Cadence ceases upon reaching our investment
        cap. However, potential investors who miss out on investing with Cadence
        may join the waiting list.<br></br>
        <br></br> Existing investors looking to exit before their investment
        term expires will have the chance to sell and transfer their investment
        to any interested investor on the waiting list
      </div>
      <br></br>
      <br></br>
      <center>
        <NavLink
          to="/account/addinvestments"
          className="btn btn-warning pt-2 pb-2 pe-4 px-4 text-dark"
          aria-current="page"
          onClick={toggleModal}
        >
          <Icons.CheckBox />{" "}
          <span className="ml-4">I understand and Accept</span>
        </NavLink>
      </center>
    </div>
  );

  if (localStorage.getItem("LoginUser")) {
    const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));

    if (!dashpage) {
      dashpage = "DashHome";
    }

    if (
      !LoginUser.data.user.Gender ||
      !LoginUser.data.user.NOKFullName ||
      !LoginUser.data.user.NOKFullName
    ) {
      DPage = (
        <Account
          UserData={LoginUser}
          BASEURL={BASEURL}
          getMetrics={getMetrics}
        />
      );
      showAlert({
        title: "Incomplete Profile",
        text: "Please complete your account profile to access the full functionality of this platform",
        icon: "error",
        button: "Account Settings",
      });
    } else if (
      !LoginUser.data.user.BankName ||
      !LoginUser.data.user.AccountName ||
      !LoginUser.data.user.AccountNumber
    ) {
      DPage = (
        <Account
          UserData={LoginUser}
          BASEURL={BASEURL}
          getMetrics={getMetrics}
        />
      );
      showAlert({
        title: "Banking Information",
        text: "Please Enter your Bank Account Information to access the full functionality of this platform",
        icon: "error",
        button: "Account Settings",
      });
    } else {
      switch (dashpage) {
        case "DashHome":
          DPage = <DashHome UserData={LoginUser} getMetrics={getMetrics} />;
          break;
        case "Investments":
          DPage = (
            <Investment
              UserData={LoginUser}
              getMetrics={getMetrics}
              toggleModal={toggleModal}
            />
          );
          break;
        case "Transactions":
          DPage = <Transactions UserData={LoginUser} getMetrics={getMetrics} />;
          break;
        case "AddInvestment":
          DPage = (
            <AddInvestment
              UserData={LoginUser}
              BASEURL={BASEURL}
              toggleModal={toggleModal}
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
          <Modal
            title="Please take note!"
            showModal={isModalOpen}
            toggleModal={toggleModal}
            content={investmentInfo}
          />

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
