import React, { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import PropTypes from "prop-types";

const Form = (props) => {
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
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [link, setLink] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const resetFormFields = () => {
    setFullname("");
    setEmail("");
    setRole("");
    setLink("");
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", fullname);
    console.log("email:", email);
    console.log("link:", link);
    console.log("role:", role);
    console.log("whatsapp:", whatsapp);

    let BASEURL = "https://cadencepub.com/production/";
    // BASEURL = "http://localhost:5000/development/";
    //Loading
    openBackdrop();
    const formData = {
      FullName: fullname,
      Email: email,
      Whatsapp: whatsapp,
      Role: role,
      Link: link,
    };

    try {
      const response = await axios.post(`${BASEURL}api/v1/workers`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_access_token_here",
        },
      });

      console.log(response);

      showAlert({
        title: "Successfully Registered",
        text: "Data submitted successfully",
        icon: "success",
        button: "Ok",
      });
      resetFormFields();
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
      props.toggleModal();
      closeBackdrop();
    }

    // Reset the form fields
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form onSubmit={handleFormSubmission}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control  "
            id="exampleInputEmail1"
            value={fullname}
            name="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            aria-describedby="fullnameHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailaddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control  "
            id="emailaddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="fullnameHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="emailaddress" className="form-label">
            Select a Role
          </label>
          <select
            className="form-control  "
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option selected disabled>
              -- Select Role --
            </option>
            <option>Content Creator </option>
            <option>Script writer</option>
            <option>PR/Event specialist</option>
            <option>Concept developer</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Link Social
          </label>
          <input
            placeholder=""
            type="link"
            className="form-control  "
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">
            Whatapp
          </label>
          <input
            type="whatsapp"
            className="form-control  "
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-warning  w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired, // Make sure it's a function and required
};

export default Form;
