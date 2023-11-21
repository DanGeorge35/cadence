import React, { Component } from "react";

import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import InfoCard from "../components/InfoCard";
import JoinPortal from "../components/JoinPortal";
import SiteSlide from "../components/siteSlide";
import Form from "../components/form";
import Modal from "../components/modal";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Header />
        <Banner />
        {/* ABOUT CADENCE */}
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

        {/* OUT LOCATION */}
        <div className=" ext2  ">
          <div className="location pt-5 aboutInfo  container-fluid">
            <div>
              <p style={{ paddingTop: "50px" }}></p>

              <div
                className="text-warning"
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                What Awaits You
              </div>
              <label
                className="aboutContent text-light"
                style={{ textAlign: "center" }}
              >
                What can you expect when you step through our doors?
              </label>
            </div>

            <div className="aboutContent">
              <div>
                <SiteSlide />
              </div>
            </div>
            <div className="pane pt-5 pb-5" style={{ textAlign: "justify" }}>
              <div className="row">
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="grm.jpg"
                    title="Gourmet Dining"
                    content="Indulge in a culinary journey like no other. Our chefs have
          crafted a menu that celebrates diverse flavors, using only the finest
          ingredients"
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="grm1.jpg"
                    title="Crafted Cocktails"
                    content=" Our mixologists are ready to dazzle your taste buds with
                  innovative cocktails that will elevate your dining experience."
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="grm2.jpg"
                    title="Live Entertainment"
                    content="Get ready for evenings filled with live music,
                  comedy nights, and themed events that will keep you coming
                  back for more."
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="ext1.jpg"
                    title="Ambience"
                    content="For those seeking a home away from home, our short-let apartments provide a touch of luxury and comfort.
                    Our interiors are designed to create the perfect backdrop for your moments of joy and celebration."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <JoinPortal />
        <Modal
          title="Join Community"
          showModal={showModal}
          toggleModal={this.toggleModal}
          content={<Form toggleModal={this.toggleModal} />}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
