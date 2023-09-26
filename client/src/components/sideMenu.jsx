import React, { Component } from "react";
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
    );
  }
}

SideMenu.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};
export default SideMenu;
