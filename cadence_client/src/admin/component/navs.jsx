import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import * as Icons from "@mui/icons-material";

class Navs extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar navbar-expand-lg  border-2 border-warning fixed-top p-1"
          style={{ backgroundColor: "#e4ad06" }}
        >
          <div className="container" style={{ height: "53px", width: "100vw" }}>
            <a
              className="navbar-brand p-0 "
              href="/home"
              style={{ outline: "none" }}
            >
              <img src="/logo.png" alt="Cadence" style={{ height: "50px" }} />
            </a>

            <NavLink
              to="/account/profile"
              aria-current="page"
              className="btn btn-light  px-3 pe-3 py-2  d-flex"
              style={{ width: "45px", height: "45px", borderRadius: "100%" }}
            >
              <span style={{ marginLeft: "-8px" }}>
                <Icons.Person2Rounded style={{ fontSize: "30px" }} />
              </span>
            </NavLink>

            <span
              className="navbar-toggler   d-block d-lg-none "
              onClick={this.props.toggleSideMenu}
            >
              <span className="material-symbols-outlined ">menu</span>
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
