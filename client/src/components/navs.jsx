import React, { Component } from "react";
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Comming soon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reservation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Invest
                  </a>
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
