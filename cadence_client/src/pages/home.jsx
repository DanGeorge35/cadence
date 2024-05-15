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
              Welcome to Cadence Apartments!
            </p>
            <label className="aboutContent">
              At Cadence Apartments, we offer the perfect blend of luxury,
              comfort, and convenience. Our exclusive apartments are
              meticulously designed to provide you with an unparalleled
              experience during your stay in Ibadan.
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
                    title="Luxurious Accommodation"
                    content="Immerse yourself in the comfort of our tastefully furnished apartments, designed to meet the highest standards of elegance and sophistication with 24/7 electricity, high-speed Wi-Fi, fully equipped kitchens, and more, ensuring a seamless and enjoyable stay."
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="grm1.jpg"
                    title="Concierge Services"
                    content="Our dedicated team is available to assist you with any requests or inquiries throughout your stay including regular housekeeping services to maintain the cleanliness and tidiness of your apartment."
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="grm2.jpg"
                    title="Event Hosting"
                    content="Whether you're planning a birthday celebration, bridal shower, or corporate event, our apartments provide the perfect venue for your special occasions"
                  />
                </div>
                <div
                  className="col-lg-6  pe-3 px-3 pb-4 "
                  style={{ fontSize: "20px" }}
                >
                  <InfoCard
                    img="ext1.jpg"
                    title="Safe and Secure"
                    content="Rest assured knowing that your safety is our top priority. Our apartments are located in secure neighborhoods and equipped with security features for your peace of mind."
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
