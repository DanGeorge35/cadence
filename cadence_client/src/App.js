import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import NoPage from "./pages/404";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Investment from "./pages/invest";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import InvestmentForm from "./pages/InvestmentForm";
import LogoutPage from "./pages/logout";
import SignIn from "./dashboard/pages/signin";
import Dashboard from "./dashboard/pages/dashboard";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state or fetch initial login status
    this.state = {
      loginUser: {},
    };
  }

  SetLoginUser = (userObj) => {
    this.setState({ loginUser: userObj });
  };

  render() {
    const AppProps = {
      loginUser: this.state.loginUser,
      setLoginUser: this.SetLoginUser,
    };

    return (
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home {...AppProps} />} />
            <Route path="/home" element={<Home {...AppProps} />} />
            <Route path="/About" element={<About {...AppProps} />} />
            <Route path="/contact" element={<Contact {...AppProps} />} />
            <Route
              path="/reservation"
              element={<Reservation {...AppProps} />}
            />
            <Route path="/invest" element={<Investment {...AppProps} />} />
            <Route path="/privacy" element={<Privacy {...AppProps} />} />
            <Route path="/terms" element={<Terms {...AppProps} />} />
            <Route
              path="/investmentform"
              element={<InvestmentForm {...AppProps} />}
            />
            <Route path="/signin" element={<SignIn {...AppProps} />} />
            {/* DASHBOARD */}
            <Route
              path="/account"
              element={<Dashboard {...AppProps} dashpage="DashHome" />}
            />
            <Route
              path="/account/home"
              element={<Dashboard {...AppProps} dashpage="DashHome" />}
            />
            <Route
              path="/account/investments"
              element={<Dashboard {...AppProps} dashpage="Investments" />}
            />
            <Route
              path="/account/transactions"
              element={<Dashboard {...AppProps} dashpage="Transactions" />}
            />
            <Route
              path="/account/profile"
              element={<Dashboard {...AppProps} dashpage="profile" />}
            />
            <Route path="/logout" element={<LogoutPage />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
