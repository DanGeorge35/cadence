import React, { Component } from "react";
import Login from "../component/login";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

class SignIn extends Component {
  render() {
    const LoginAdmin = localStorage.getItem("LoginAdmin");
    if (LoginAdmin) {
      return <Navigate to="/admin" />;
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="cover"></div>
          <div className="row signSlideCover ">
            <div className="col-lg-4 offset-lg-4 signupLeft  p-0 ">
              <div className=" signupLeftBase">
                <div className="text-center registerLogo">
                  <div>
                    <a href="/home">
                      <img
                        src="../logo.png"
                        alt="Cadence"
                        style={{ height: "80px", verticalAlign: "center" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="">
                  <div className="AdminForm">
                    <Login BASEURL={this.props.BASEURL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SignIn.propTypes = {
  BASEURL: PropTypes.string,
};

export default SignIn;
