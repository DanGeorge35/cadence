import React from "react";
import * as Icons from "@mui/icons-material";

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
                      Registration Successful!
                    </h2>
                    <br></br>
                    <br></br>
                    <h5 className="text-center" style={{ color: "#999" }}>
                      Please check your email for the next steps in your
                      investment process.
                    </h5>
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
