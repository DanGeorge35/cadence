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
              Welcome to Cadence - Your One-Stop Booking Destination!
            </p>
            <div className="aboutContent" style={{ textAlign: "justify" }}>
              <div className="text-white">
                At Cadence, we&apos;re delighted to offer a wide range of
                booking options tailored to meet your every need. Our platform
                simplifies the process of reserving spaces, accommodations, and
                transportation within Ibadan.
              </div>
              <br></br>
              <br></br>

              <ol>
                <li>
                  <b className="text-white">Book a Space:</b> <br></br> Looking
                  to host a memorable event or simply dine with friends in a
                  vibrant and luxurious setting? Cadence allows you to reserve
                  spaces within our prestigious restaurant and lounge. Whether
                  it&apos;s a private event, a romantic evening, or a gathering
                  with friends, our spaces offer the perfect backdrop to your
                  memorable moments.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  <b className="text-white">Book a Shortlet:</b> <br></br> When
                  you visit Ibadan, choose from our selection of short-rent
                  luxury homes for a comfortable and convenient stay. Immerse
                  yourself in the local culture, and enjoy the comforts of home
                  within our thoughtfully designed accommodations.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  <b className="text-white">Book a Ride:</b> <br></br> Need a
                  hassle-free way to get around Ibadan? Cadence Fleet is here to
                  serve your transportation needs. Book a ride and enjoy
                  comfortable and safe travel throughout the city. Your
                  convenience is our priority.
                  <br></br>
                </li>
              </ol>
              <div>
                <br></br>
                Experience seamless booking at Cadence and explore everything
                Ibadan has to offer, whether you&apos;re looking for space,
                accommodation, or transportation. Your adventure begins with a
                click.
              </div>
              <a
                className="btn btn-outline-warning mt-5 px-5 w100 d-block"
                href="contact"
              >
                Contact Us
              </a>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Reservation;
