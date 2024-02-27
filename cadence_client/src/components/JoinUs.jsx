import React, { Component } from "react";

class JoinUs extends Component {
  render() {
    return (
      <div className=" text-white" style={{ backgroundColor: "#001119f9" }}>
        <div className="container pt-4 pb-3 ">
          <div className="pt-lg-5 pt-1 pb-5 pe-3 px-3  ">
            <div className="row pt-lg-5 pb-5 ">
              <div className="col-lg-6 ">
                <img src="fam2.jpg" style={{ width: "100%" }} />
              </div>
              <div className="col-lg-6 pt-5 pb-5">
                <h1 className="pb-3 text-primary-color">
                  Join the Cadence Family
                </h1>
                <div
                  className="fontFam3"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  &quot;Sharing the best experiences begins with you! 🌟
                  We&apos;re excited to invite potential investors to join the
                  Cadence family. Cadence isn&apos;t just a place to dine and
                  unwind; it&apos;s a unique investment opportunity covering a
                  restaurant, lounge, bar, and short-let homes, all promising
                  lucrative returns. Be part of our journey to create a legacy
                  of excellence in hospitality. Don&apos;t miss out—reach out
                  today to explore Cadence investment opportunities
                  <div className="py-4">
                    <a
                      href="/signup"
                      className="btn btn-warning   py-2 fontFam4 "
                      style={{
                        minWidth: "200px",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      Register Now &gt;&gt;
                    </a>
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

export default JoinUs;
