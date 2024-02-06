import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ChartView extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { data } = this.props;
    return (
      <div className="ChartView  animate__animated animate__fadeIn">
        <Bar data={data} />
      </div>
    );
  }
}

export default ChartView;
