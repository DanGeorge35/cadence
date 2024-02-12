import React from "react";
import * as Icons from "@mui/icons-material";
import { NavLink } from "react-router-dom";
// import SignSlide from "../component/signSlide"

export default function Registered() {
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
                <div
                  className=" registerForm pe-3 px-3 "
                  style={{ backgroundColor: "white" }}
                >
                  <div className="text-center">
                    <br></br>
                    <div
                      className="p-3 mb-4"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#ddd",
                        borderRadius: "100px",
                        color: "green",
                      }}
                    >
                      <Icons.ThumbUp />
                    </div>
                    <br></br>
                    <h2 className="text-center text-success">
                      Your account is Successfully registered!{" "}
                    </h2>
                    <br></br>
                    <br></br>
                    <h5 className="text-center" style={{ color: "#999" }}>
                      Kindly check your emaill to see the next step in your
                      investment journey
                    </h5>

                    <div className="text-center  pt-2">
                      <br />
                      <span className="animate__animated  animate__fadeIn animate__infinite">
                        <NavLink
                          to="/signin/"
                          className="nav-link  "
                          aria-current="page"
                          style={{
                            fontSize: "17px ",
                            fontWeight: "700",
                            color: "orange",
                          }}
                        >
                          &gt;&gt; Login to your account &gt;&gt;
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
    </div>
  );
}
