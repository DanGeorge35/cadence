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
import Blog from "./pages/blog";
import SignUp from "./dashboard/pages/signup";
import SignIn from "./dashboard/pages/signin";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/invest" element={<Investment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/investmentform" element={<InvestmentForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
