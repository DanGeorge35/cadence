import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Reservation extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>RESERVATION</h1>
          </div>
        </div>
        <div className="about">
          <div className="pt-5 aboutInfo pe-3 px-3">
            <p style={{ paddingTop: "50px" }}></p>

            <p
              className=""
              style={{
                fontFamily: "Nanum Myeongjo",
                fontSize: "30px",
                fontWeight: "700",
                color: "rgb(251 202 14)",
              }}
            >
              A Brief History of Cadence
            </p>
            <label className="aboutContent">
              Cadence is more than just a restaurant and bar; it&apos;s a
              testament to a journey fueled by passion, creativity, and a deep
              love for providing unforgettable experiences. Our story began when
              Cadence took over an existing restaurant nestled on New Eleyele
              Road in Ibadan. Recognizing the untapped potential of this space,
              we embarked on a mission to transform it into something truly
              extraordinary. We envisioned a place where people could come
              together, savor exquisite cuisine, enjoy signature cocktails, and
              create timeless memories.
            </label>
            <br></br>
            <br></br>
            <img src="food_banner2.png" style={{ width: "80%" }} />
          </div>

          <div className="about ext3">
            <div className="  aboutInfo  pe-3 px-3">
              <p
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "rgb(251 202 14)",
                }}
              >
                The Transformation
              </p>
              <label className="aboutContent text-white  pb-4    border-warning">
                Our journey was marked by relentless dedication and a commitment
                to excellence. We embarked on a massive renovation project,
                meticulously designing every corner to exude elegance and
                sophistication. Our vision extended beyond the confines of the
                restaurant as we set out to build an outdoor bar space that
                would redefine leisure and entertainment.
              </label>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Reservation;
