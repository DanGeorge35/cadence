import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2  " style={{ minHeight: "100px" }}>
              <label className="footerHead ">MENU</label>
              <a className="footerLink ">HOME</a>
              <a className="footerLink ">REGULAR MENU</a>
              <a className="footerLink ">BOOK AN EVENT</a>
              <a className="footerLink ">GALLERY</a>
              <a className="footerLink ">ABOUT</a>
            </div>
            <div className="col-lg-2 " style={{ minHeight: "100px" }}>
              <label className="footerHead">LINK</label>
              <a className="footerLink ">HOME</a>
              <a className="footerLink ">REGULAR MENU</a>
              <a className="footerLink ">BOOK AN EVENT</a>
              <a className="footerLink ">GALLERY</a>
              <a className="footerLink ">ABOUT</a>
            </div>
            <div className="col-lg-2 " style={{ minHeight: "100px" }}>
              <label className="footerHead">CONTACT</label>
              <a className="footerLink">HOME</a>
              <a className="footerLink">REGULAR MENU</a>
              <a className="footerLink">BOOK AN EVENT</a>
              <p style={{ paddingTop: "10px" }}></p>
              <label className="footerHead">FOLLOW US ON</label>
              <a className="footerIcon">GALLERY</a>
              <a className="footerIcon">ABOUT</a>
            </div>
            <div className="col-lg-6 " style={{ minHeight: "100px" }}>
              <div
                className=""
                style={{
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                <img src="logo.png" style={{ height: "70px" }} />
                <label
                  className="cHeader fontFam3"
                  style={{
                    fontWeight: "600",
                    marginBottom: "30px",
                    color: "#968145",
                  }}
                >
                  Enjoyment & Entertainment
                </label>
              </div>
              <div className="pb-3">
                <label className="cHeader fontFam2" style={{ color: "#999" }}>
                  Monday -Thursday
                </label>
                <label className="cHeader">@ 8am - 8pm</label>
              </div>
              <div className="pb-3">
                <label className="cHeader fontFam2" style={{ color: "#999" }}>
                  Friday - Saturday
                </label>
                <label className="cHeader">@ 8am - 8pm</label>
              </div>
              <div className="pb-3">
                <label className="cHeader fontFam2" style={{ color: "#999" }}>
                  Sunday
                </label>
                <label className="cHeader">@ 9am to 5pm</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
