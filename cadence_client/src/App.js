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
import UserLogoutPage from "./pages/logout";
import AdminLogoutPage from "./admin/pages/logout";
import SignIn from "./dashboard/pages/signin";
import SignUp from "./dashboard/pages/signup";
import Registered from "./dashboard/pages/registered";
import Dashboard from "./dashboard/pages/dashboard";
import Admin from "./admin/pages/dashboard";
import AdminSignIn from "./admin/pages/signin";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let BASEURL = "https://cadencepub.com/production/";
    // BASEURL = "http://localhost:5000/development/";
    return (
      <div>
        <Router>
          <Routes>
            <Route index element={<Home BASEURL={BASEURL} />} />
            <Route path="/" element={<Home BASEURL={BASEURL} />} />
            <Route path="/home" element={<Home BASEURL={BASEURL} />} />
            <Route path="/About" element={<About BASEURL={BASEURL} />} />
            <Route path="/contact" element={<Contact BASEURL={BASEURL} />} />
            <Route
              path="/reservation"
              element={<Reservation BASEURL={BASEURL} />}
            />
            <Route path="/invest" element={<Investment BASEURL={BASEURL} />} />
            <Route path="/privacy" element={<Privacy BASEURL={BASEURL} />} />
            <Route path="/terms" element={<Terms BASEURL={BASEURL} />} />
            <Route
              path="/investmentform"
              element={<InvestmentForm BASEURL={BASEURL} />}
            />
            <Route path="/signin" element={<SignIn BASEURL={BASEURL} />} />
            <Route path="/signup" element={<SignUp BASEURL={BASEURL} />} />
            <Route
              path="/registered"
              element={<Registered BASEURL={BASEURL} />}
            />

            {/* DASHBOARD */}
            <Route
              path="/account"
              element={<Dashboard dashpage="DashHome" BASEURL={BASEURL} />}
            />
            <Route
              path="/account/home"
              element={<Dashboard dashpage="DashHome" BASEURL={BASEURL} />}
            />
            <Route
              path="/account/investments"
              element={<Dashboard dashpage="Investments" BASEURL={BASEURL} />}
            />
            <Route
              path="/account/transactions"
              element={<Dashboard dashpage="Transactions" BASEURL={BASEURL} />}
            />
            <Route
              path="/account/addinvestments"
              element={<Dashboard dashpage="AddInvestment" BASEURL={BASEURL} />}
            />
            <Route
              path="/account/singleinvestments/:id"
              element={
                <Dashboard dashpage="SingleInvestment" BASEURL={BASEURL} />
              }
            />
            <Route
              path="/account/profile"
              element={<Dashboard dashpage="profile" BASEURL={BASEURL} />}
            />
            {/* ADMIN */}
            <Route
              path="/admin/signin"
              element={<AdminSignIn BASEURL={BASEURL} />}
            />
            <Route
              path="/admin"
              element={<Admin dashpage="DashHome" BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/home"
              element={<Admin dashpage="DashHome" BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/investments"
              element={<Admin dashpage="Investments" BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/singleinvestments/:id"
              element={<Admin dashpage="SingleInvestment" BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/transactions"
              element={<Admin dashpage="Transactions" BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/profile"
              element={<Admin dashpage="profile" BASEURL={BASEURL} />}
            />
            <Route
              path="/logout"
              element={<UserLogoutPage BASEURL={BASEURL} />}
            />
            <Route
              path="/account/logout"
              element={<UserLogoutPage BASEURL={BASEURL} />}
            />
            <Route
              path="/admin/logout"
              element={<AdminLogoutPage BASEURL={BASEURL} />}
            />
            <Route path="*" element={<NoPage BASEURL={BASEURL} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
