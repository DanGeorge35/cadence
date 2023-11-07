import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class SignSlide extends Component {
  render() {
    const images = [
      {
        url: "./drink1.jpeg",
      },
      {
        url: "./drink2.jpeg",
      },
      {
        url: "./drink3.jpeg",
      },
      {
        url: "./drink6.jpeg",
      },
    ];
    return (
      <Slide autoplay={true} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="signSlide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <div className="signSlideCover"></div>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default SignSlide;
