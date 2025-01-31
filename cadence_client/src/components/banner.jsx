import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./cadnewbg.jpeg",
        caption1: "Unparalleled comfort and convenience",
        caption2: "Explore our short-let apartments",
        caption3:
          "Book your stay today and unlock the door of comfort, flexibility, and personalized hospitality",
        action: { title: "Book Now", url: "contact" },
      },
      {
        url: "./home1.jpg",
        caption1: "Experience Luxury, Embrace Comfort",
        caption2: "Vibrant and luxurious apartments",
        caption3:
          "Immerse yourself in the comfort of our tastefully furnished apartments",
        action: { title: "Contact Now", url: "contact" },
      },
      {
        url: "./home2.jpg",
        caption1: "Invest",
        caption2: "Join the Cadence Family",
        caption3:
          "Investing in Cadence means joining a thriving business and becoming part of the Cadence family",
        action: { title: "Invest With Us", url: "invest" },
      },
    ];
    return (
      <Slide autoplay={true} arrows={false} indicators={true} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="each-slide w3-display-container" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  width: "100vw",
                  height: "99vh",
                  background: "#00000076",
                }}
              >
                <div
                  className="each-slide-child w3-display-middle"
                  style={{
                    width: "100vw",
                  }}
                >
                  <div className="Slidetop">{slideImage.caption1}</div>
                  <div className="Slidetitle">{slideImage.caption2}</div>
                  <div className="Slidedetails">{slideImage.caption3}</div>
                  <a href={slideImage.action.url}>
                    <button className="btn btn-warning   py-2  d-flex">
                      {slideImage.action.title}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default Banner;
