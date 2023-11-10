import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class SiteSlide extends Component {
  render() {
    const images = [
      {
        url: "./ext1.jpg",
      },
      {
        url: "./ext2.jpg",
      },
      {
        url: "./ext3.jpg",
      },
    ];
    return (
      <Slide autoplay={true} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="each-slide2 pt-4 pb-4" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default SiteSlide;
