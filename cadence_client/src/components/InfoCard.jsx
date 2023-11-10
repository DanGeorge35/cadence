import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoCard extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div
        className="text-center shadow  "
        style={{
          padding: "30px",
          backgroundColor: "#d8d8d8",

          height: "100%",
        }}
      >
        <b
          className=" fontFam2 "
          style={{ color: "#b88a74", fontSize: "25px" }}
        >
          {title}
        </b>
        <br></br>
        <img src="title-shape.png" style={{ height: "16px" }} />
        <br></br>
        <br></br>
        <div className="fontFam3">{content}</div>
        <br></br>
      </div>
    );
  }
}

InfoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoCard;
