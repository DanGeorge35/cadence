import React, { Component } from "react";
import Menu from "../component/menu";
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

            <Menu toggleSideMenu={this.props.toggleSideMenu} />
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
