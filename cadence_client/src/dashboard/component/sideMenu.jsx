import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class SideMenu extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { isOpen } = this.props;
    return (
      <div
        className={`SideMenu  ${
          isOpen
            ? ""
            : " animate__animated animate__faster animate__fadeOutLeft"
        } `}
      >
        <div className="fadeCover animate__animated animate__faster animate__fadeIn"></div>
        <div
          className={`SideContent animate__animated animate__faster  ${
            isOpen ? " animate__slideInLeft" : "  animate__slideOutLeft"
          }`}
        >
          <div>
            <div className="py-4 pb-5">
              <span
                className="navbar-toggler d-block d-block-md d-none-lg"
                type="button"
                style={{ float: "right" }}
                onClick={this.props.toggleSideMenu}
              >
                <span className="material-symbols-outlined">close</span>
              </span>
            </div>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link  " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link  " aria-current="page">
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
                <NavLink to="/blog" className="nav-link  " aria-current="page">
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

            <NavLink
              to="/investmentform"
              aria-current="page"
              className="btn btn-outline-warning  px-4 pe-4 py-2  d-flex "
              style={{ minWidth: "150px" }}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

SideMenu.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};
export default SideMenu;
