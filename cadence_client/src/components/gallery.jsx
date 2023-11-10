import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="pt-5  pb-5 gallery ">
        <div className="container-fluid">
          <p style={{ paddingTop: "50px" }}></p>
          <p
            className="text-center"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgb(251 202 14)",
            }}
          >
            CADENCE+ ALWAYS COOKING UP FUN
          </p>
          <p
            className="text-center text-dark"
            style={{
              fontFamily: "Nanum Myeongjo",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Check Out Our Gallery
          </p>
          <p style={{ paddingTop: "50px" }}></p>
          <div
            className="  bg-secondary bgimg"
            style={{
              height: "600px",
              backgroundImage: "url('gallery/photo1.jpeg')",
            }}
          ></div>

          <div className="row ">
            <div className="col-lg-6 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo2.jpeg')",
                }}
              ></div>
            </div>
            <div className="col-lg-6 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo3.jpeg')",
                }}
              ></div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-3 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo4.jpeg')",
                }}
              ></div>
            </div>
            <div className="col-lg-3 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo6.jpeg')",
                }}
              ></div>
            </div>
            <div className="col-lg-3 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo7.jpeg')",
                }}
              ></div>
            </div>
            <div className="col-lg-3 pt-4">
              <div
                className="  bg-secondary bgimg"
                style={{
                  height: "400px",
                  backgroundImage: "url('gallery/photo8.jpeg')",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-center pt-5 pb-5">
          <button className="btn btn-outline-warning   border-3 text-center mt-5 pt-3 pb-3 pe-5 px-5   ">
            View Full Gallery
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
