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

export default function Register(props) {
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

  const [FullName, setFullname] = useState("");
  const [Phone, setPhone] = useState("");
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
      FullName: FullName,
      Phone: Phone,
      Email: email,
      Password: password,
    };

    try {
      const response = await axios.post(
        `${BASEURL}api/v1/investors`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );

      console.log(response);
      closeBackdrop();
      // redirect to dashboard
      window.location = "/registered";
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
                <b>Account Registration</b>
              </h5>
              <div className=" text-center text-warning  fontFam2 pb-4">
                Register your investment account
              </div>
              <br />
              <input
                className="form-control"
                type="text"
                name="FullName"
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your fullname"
                required
              />{" "}
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />{" "}
              <br />
              <input
                className="form-control"
                type="number"
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />{" "}
              <br />
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />{" "}
              <br />
              <FormControlLabel
                control={<Checkbox color="warning" defaultChecked required />}
                label="Accept Term and Condition"
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

Register.propTypes = {
  BASEURL: PropTypes.string,
};
