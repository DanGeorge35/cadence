import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-4  " style={{ minHeight: "100px" }}>
              <label className="footerHead ">MENU</label>
              <a className="footerLink " href="/home">
                HOME
              </a>
              <a className="footerLink " href="/about">
                ABOUT
              </a>

              <a className="footerLink " href="/reservation">
                RESERVATION
              </a>
            </div>
            <div className="col-lg-2 col-4 " style={{ minHeight: "100px" }}>
              <label className="footerHead">LINK</label>

              <a className="footerLink " href="/invest">
                INVEST
              </a>

              <a className="footerLink " href="/privacy">
                PRIVACY POLICY
              </a>
              <a className="footerLink " href="/terms">
                TERMS & CONDITION
              </a>
            </div>
            <div className="col-lg-2 col-4 " style={{ minHeight: "100px" }}>
              <label className="footerHead">SOCIALS </label>
              <a
                className="footerLink"
                href="https://www.instagram.com/cadencepub/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-3">INSTAGRAM</span>
              </a>
              <a
                className="footerLink"
                href="https://t.me/+d2INnzyuB1A4ZWZk"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-3">TELEGRAM</span>
              </a>
              <a
                className="footerLink"
                href="https://medium.com/@thecadencecafe"
                target="_blank"
                rel="noreferrer"
              >
                MEDIUM
              </a>
              <p style={{ paddingTop: "10px" }}></p>
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
                  Dine in Style, Sip in Harmony
                </label>
              </div>

              <div className="pb-3">
                <label className="cHeader fontFam2" style={{ color: "#999" }}>
                  Monday - Saturday
                </label>
                <label className="cHeader">@ 9am - 1am</label>
              </div>
              <div className="pb-3">
                <label className="cHeader fontFam2" style={{ color: "#999" }}>
                  Sunday
                </label>
                <label className="cHeader">@ 12pm to 1am</label>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          © 2023 CADENCE -- &quot;Dine in Style, Sip in Harmony &quot;
        </div>
      </div>
    );
  }
}

export default Footer;
