import React, { Component } from "react";
import Navs from "./navs";
import SideMenu from "./sideMenu";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideMenuOpen: false,
    };
  }

  toggleSideMenu = () => {
    this.setState((prevState) => ({
      isSideMenuOpen: !prevState.isSideMenuOpen,
    }));
  };

  render() {
    const { isSideMenuOpen } = this.state;

    return (
      <div>
        <Navs toggleSideMenu={this.toggleSideMenu} />
        <SideMenu
          isOpen={isSideMenuOpen}
          toggleSideMenu={this.toggleSideMenu}
        />
      </div>
    );
  }
}

export default Header;
