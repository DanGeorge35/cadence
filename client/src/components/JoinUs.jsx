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
                  We believe that the best experiences are shared. As we prepare
                  to reopen our doors, we extend an invitation to you - our
                  potential investors. Cadence is not just a place to dine and
                  unwind; it&apos;s an investment opportunity that promises
                  lucrative returns. By joining us on this journey, you&apos;re
                  not only investing in a thriving business but also becoming a
                  part of the Cadence family. Together, we&apos;ll create a
                  legacy of excellence in hospitality. Don&apos;t miss out on
                  this chance to be part of something exceptional. Reach out to
                  us today to discuss investment opportunities, and let&apos;s
                  make Cadence&apos;s reopening an event to remember.
                  <div className="py-4">
                    <button
                      className="btn btn-warning   py-2 fontFam4 "
                      style={{
                        minWidth: "200px",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      Invest With Us
                    </button>
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
