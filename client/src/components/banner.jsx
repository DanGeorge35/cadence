import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner border-bottom border-warning border-2">
         <div style={{backgroundImage:"url(food4.jpeg)",height:"99.8vh",backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundPosition:"bottom"}}>
            </div>
      </div>
    );
  }
}

export default Banner;
