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
            isOpen ? " animate__slideInLeft" : "  animate__slideOutRight"
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
                <a
                  href="https://medium.com/@thecadencecafe "
                  target="_blank"
                  className="nav-link  "
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>

            <NavLink
              to="/signin"
              aria-current="page"
              className="btn text-warning  mt-3 px-4 pe-4 py-3 d-flex "
              style={{ minWidth: "150px", backgroundColor: "#000" }}
            >
              Sign In
            </NavLink>

            <NavLink
              to="/invest"
              aria-current="page"
              className="btn btn-warning  px-4 pe-4 py-3 mt-4 d-flex "
              style={{ minWidth: "150px" }}
            >
              Invest with Us
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
