import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class LogoutPage extends Component {
  render() {
    localStorage.removeItem("LoginAdmin");
    return <Navigate to="/admin/signin" />;
  }
}

export default LogoutPage;
