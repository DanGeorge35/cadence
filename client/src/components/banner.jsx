import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./food1.jpeg",
        caption: "Slide 1",
      },
      {
        url: "./food2.jpeg",
        caption: "Slide 2",
      },
      {
        url: "./food3.jpeg",
        caption: "Slide 3",
      },
    ];
    return (
      <Slide autoplay={false}>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default Banner;
