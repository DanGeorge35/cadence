import React from "react";
import { NavLink } from "react-router-dom";
// import SignSlide from "../component/signSlide";
import Register from "../component/register";
import PropTypes from "prop-types";

const signup = ({ BASEURL }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="cover"></div>
        <div className="row signSlideCover">
          <div className="col-lg-4 offset-lg-4 signupLeft  p-0 ">
            <div className=" signupLeftBase">
              <div className="text-center registerLogo ">
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
                <div className=" registerForm pe-3 px-3">
                  <Register BASEURL={BASEURL} />
                  <div className="text-center  pt-4">
                    <span>Already have an account?</span>
                    <br />
                    <span className="animate__animated  animate__fadeIn animate__infinite">
                      <NavLink
                        to="/signin/"
                        className="nav-link  "
                        aria-current="page"
                        style={{ fontSize: "14px ", color: "#a8d6ff" }}
                      >
                        &gt;&gt; SignIn to your Account &gt;&gt;
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

signup.propTypes = {
  BASEURL: PropTypes.string,
};

export default signup;
