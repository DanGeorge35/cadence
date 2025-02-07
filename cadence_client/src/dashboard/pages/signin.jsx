import React, { Component } from "react";
import Login from "../component/login";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

class SignIn extends Component {
  render() {
    const LoginUser = localStorage.getItem("LoginUser");
    if (LoginUser) {
      return <Navigate to="/account" />;
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
                        src="/logo.png"
                        alt="Cadence"
                        style={{ height: "80px", verticalAlign: "center" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="">
                  <div className=" registerForm">
                    <Login BASEURL={this.props.BASEURL} />
                    <div className="text-center  pt-4">
                      {/* <span>Dont have an account?</span>
                      <br />
                      <span className="animate__animated  animate__fadeIn animate__infinite">
                        <NavLink
                          to="/signup/"
                          className="nav-link  "
                          aria-current="page"
                          style={{ fontSize: "14px ", color: "#a8d6ff" }}
                        >
                          &lt;&lt; Register Your Investment Account &lt;&lt;
                        </NavLink>
                      </span> */}
                    </div>
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
