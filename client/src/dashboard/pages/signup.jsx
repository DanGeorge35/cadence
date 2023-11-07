import React from "react";
// import SignSlide from "../component/signSlide";
import Register from "../component/register";

export default function SignUp() {
  return (
    <div>
      <div className="container-fluid">
        <div className="cover"></div>
        <div className="row signSlideCover">
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
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
