import React, { Component } from "react";

class JoinPortal extends Component {
  render() {
    return (
      <div
        className=" text-white"
        style={{ backgroundColor: "#001119f9", borderTop: "10px solid black" }}
      >
        <div className="container pt-2 pb-3 ">
          <div className="pt-1 pb-5 pe-3 px-3  ">
            <div className="row  ">
              <div className="col-lg-12  text-center">
                <div>
                  <img src="form.png" style={{ height: "300px" }} />
                </div>
                <h1 className="pb-3 text-primary-color">
                  Join the Cadence the Development Portal
                </h1>
                <div
                  className="fontFam3 pb-5"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Apply to join the Cadence Creator Community
                </div>

                <button
                  className="btn btn-warning   py-2 fontFam4 "
                  style={{
                    minWidth: "200px",
                    fontSize: "17px",
                    fontWeight: "700",
                  }}
                >
                  Apply to Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinPortal;
