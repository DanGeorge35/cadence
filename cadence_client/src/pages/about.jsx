import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteSlide from "../components/siteSlide";

class About extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>ABOUT US</h1>
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
              create timeless memories. <br></br>
              <br></br>However, what started as the acquisition and renovation
              of an existing restaurant, quickly evolved into a multifaceted
              venture. Cadence doesn&apos;t just operate as a restaurant,
              lounge, and bar; we&apos;ve expanded our horizons to include
              short-let apartments
            </label>
            <br></br>
            <br></br>
            <img src="food_banner2.png" style={{ width: "80%" }} />
          </div>

          <div className="about ext3">
            <div className="  aboutInfo  pe-3 px-3">
              <div className="aboutContent">
                <div>
                  <SiteSlide />
                </div>
              </div>
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
                Our journey at Cadence has been defined by unwavering dedication
                and a pursuit of excellence. From a meticulous renovation that
                breathed elegance into every corner to the creation of an
                outdoor bar space redefining leisure and entertainment, Cadence
                is a symphony of sophistication.<br></br>
                <br></br> But there&apos;s more to Cadence than meets the eye.
                We&apos;ve expanded our horizons to include the concept of
                short-let homes, adding a new dimension to our commitment to
                provide exceptional experiences. This goes beyond just dining;
                it&apos;s about indulgence, entertainment, and now, a touch of
                luxury living.<br></br>
                <br></br> Join us at Cadence, where every detail tells a story
                of refinement, and every moment promises a unique experience.
              </label>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
