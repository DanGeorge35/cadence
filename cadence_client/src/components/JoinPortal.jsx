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
                  <img src="join.png" style={{ height: "200px" }} />
                </div>
                <br></br>
                <h1 className="pb-3 text-primary-color">
                  Join the Cadence Development Portal
                </h1>
                <div
                  className="pb-5"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Sharing the best experiences begins with you! 🌟 As we gear up
                  to reopen, we&apos;re excited to invite potential investors to
                  join the Cadence family. Cadence isn&apos;t just a place to
                  dine and unwind; it&apos;s a unique investment opportunity
                  covering a restaurant, lounge, bar, and short-let homes, all
                  promising lucrative returns. Be part of our journey to create
                  a legacy of excellence in hospitality. Don&apos;t miss
                  out—reach out today to explore Cadence investment
                  opportunities
                </div>

                <button
                  className="btn btn-warning   py-2 fontFam4 "
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
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
