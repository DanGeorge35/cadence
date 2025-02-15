import React from "react";
import { NavLink } from "react-router-dom";
import * as Icons from "@mui/icons-material";

export default function Menu() {
  return (
    <div className=" ">
      <ul className="menu m-0 p-0 mb-lg-0">
        <li className="menu-item">
          <NavLink to="/account/" className="nav-link  " aria-current="page">
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.Home />
            </span>
            <span style={{ marginTop: "5px" }}>Dashboard</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/account/investments"
            className="nav-link  "
            aria-current="page"
          >
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.MonetizationOn />
            </span>
            <span style={{ marginTop: "5px" }}>Investments</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink
            to="/account/transactions"
            className="nav-link  "
            aria-current="page"
          >
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.CandlestickChartRounded />
            </span>
            <span style={{ marginTop: "5px" }}>Transactions</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/account/profile"
            className="nav-link  "
            aria-current="page"
          >
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.Person3 />
            </span>
            <span style={{ marginTop: "5px" }}>Account</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <NavLink
            to="/account/password"
            className="nav-link "
            aria-current="page"
          >
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.Key />
            </span>
            <span style={{ marginTop: "5px" }}>Password Settings</span>
          </NavLink>
        </li>

        <li className="menu-item">
          <a href="/logout" className="nav-link  " aria-current="page">
            <span
              style={{
                verticalAlign: "middle",
                marginRight: "30px",
              }}
            >
              <Icons.LogoutTwoTone />
            </span>
            <span style={{ marginTop: "5px" }}> Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
