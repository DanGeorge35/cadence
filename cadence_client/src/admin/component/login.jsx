import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControlLabel,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import Swal from "sweetalert2";
import axios from "axios";

export default function Login(props) {
  const showAlert = (data) => {
    Swal.fire({
      title: data.title, //"success",
      text: data.text, //"success",
      icon: data.icon, //"success",
      confirmButtonText: data.button,
    });
  };
  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };
  // Define a state to manage form submission

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform any form submission logic here, e.g., send data to a server
    console.log("email:", email);
    const BASEURL = props.BASEURL;
    //Loading
    openBackdrop();
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${BASEURL}api/v1/admin/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      response.data.credentials = formData;

      localStorage.setItem("LoginAdmin", JSON.stringify(response.data));
      closeBackdrop();
      // redirect to dashboard
      window.location = "/admin";
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        showAlert({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          button: "Ok",
        });
      } else {
        console.error(error.message);
        showAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
      }
    } finally {
      closeBackdrop();
    }

    // Reset the form fields
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={backdropOpen}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <form onSubmit={handleFormSubmission}>
              <h5 className=" text-center text-white pt-4 ">
                <b>Admin Login</b>
              </h5>
              <div className=" text-center text-warning  fontFam2 pb-4">
                Login to your admin account
              </div>

              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />

              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <FormControlLabel
                control={<Checkbox color="warning" defaultChecked />}
                label="Remember Me"
              />
              <br></br>
              <br></br>

              <button className="btn w-100 btn-warning" type="submit">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  BASEURL: PropTypes.string,
};
