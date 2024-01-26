import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class LogoutPage extends Component {
  render() {
    localStorage.removeItem("LoginUser");
    return <Navigate to="/signin" />;
  }
}

export default LogoutPage;
