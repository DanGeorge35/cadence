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
            : " animate__animated animate__faster animate__fadeOutRight"
        } `}
      >
        <div className="fadeCover animate__animated animate__faster animate__fadeIn"></div>
        <div
          className={`SideContent animate__animated animate__faster  ${
            isOpen ? " animate__slideInRight" : "  animate__slideOutRight"
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
            <button
              className="btn btn-warning  text-center mt-4 p-3  d-flex "
              style={{ width: "100%" }}
            >
              Sign In / Sign up
              <span style={{ position: "absolute", right: "55px" }}>
                <span className="material-symbols-outlined animate__animated animate__infinite animate__slideInRight">
                  chevron_right
                </span>
              </span>
            </button>
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
