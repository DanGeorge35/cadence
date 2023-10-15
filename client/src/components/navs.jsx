import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navs extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar navbar-expand-lg  border-2 border-warning fixed-top p-1"
          style={{ backgroundColor: "#000000b0" }}
        >
          <div className="container" style={{ height: "73px", width: "100vw" }}>
            <a
              className="navbar-brand p-0 "
              href="#"
              style={{ outline: "none" }}
            >
              <img src="logo.png" alt="Cadence" style={{ height: "70px" }} />
            </a>

            <div
              className="navbar-collapse  collapse d-none d-none-md d-block-lg"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  style={{ paddingLeft: "80px", paddingTop: "30px" }}
                ></li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link  " aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link  "
                    aria-current="page"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reservation"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Reservation
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Blog
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/invest"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Invest
                  </NavLink>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-outline-warning   py-2  d-flex  d-md-none d-none  d-lg-block"
              style={{ minWidth: "150px" }}
              onClick={this.props.toggleSideMenu}
            >
              Sign In / Sign up
            </button>

            <span
              className="navbar-toggler   d-block d-lg-none "
              onClick={this.props.toggleSideMenu}
            >
              <span className="material-symbols-outlined ">lunch_dining</span>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

Navs.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};

export default Navs;
