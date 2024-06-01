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
                  Join the Cadence Family and Keep Earning!
                </h1>
                <div
                  className="fontFam3"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Unlock unparalleled investment opportunities with Cadence. Our
                  luxurious shortlet apartments generate consistent, high-yield
                  revenues, ensuring you receive steady returns. Invest with us
                  and enjoy peace of mind knowing your funds are working in a
                  thriving, lucrative market. Don&apos;t miss out—become a part
                  of the Cadence family today and start earning from our
                  success!
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
