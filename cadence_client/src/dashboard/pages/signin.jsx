import React from "react";
// import SignSlide from "../component/signSlide";
import Login from "../component/login";

export default function SignIn() {
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
                      src="logo.png"
                      alt="Cadence"
                      style={{ height: "80px", verticalAlign: "center" }}
                    />
                  </a>
                </div>
              </div>
              <div className="">
                <div className=" registerForm">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
