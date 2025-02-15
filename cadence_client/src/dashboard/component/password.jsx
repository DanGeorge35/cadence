import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import PropTypes from "prop-types";

export default function PasswordSetting(props) {
  const UserToken = props.UserData.token;

 const showAlert = (data) => {
     Swal.fire({
       title: data.title,
       text: data.text,
       icon: data.icon,
       confirmButtonText: data.button,
     }).then((result) => {
       if (result.isConfirmed) {
         window.location.href = "/account/investments";
       }
     });
   };
  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  const UserData = props.UserData.data.user;
  
  const [OldPassword, setOldPassword] = useState(UserData.Password);

  const [Password, setPassword] = useState(UserData.Password);
  
  const [NewPassword, setNewPassword] = useState(UserData.NewPassword);
 

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    //Loading
    openBackdrop();
    const formData = {
      oldPassword: OldPassword,
      password: Password,
      newPassword: NewPassword,
    };
    alert(formData)
    try {
       await axios.patch(
        `${props.BASEURL}api/v1/investors/changepassword`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UserToken}`,
          },
        }
      );
  

      showAlert({
        title: "Completed",
        text: "Password Successfully Updated",
        icon: "success",
        button: "Ok", //onclick
        onclick: 'window.location = "/account/profile"',
      });
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
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="container " style={{ minHeight: "", paddingTop: "40px" }}>
        <div className="row ">
          <div className="col-lg-12 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>PASSWORD SETTINGS</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              Update your account&apos;s information
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmission} className="">
        <div className="container bg-light   mt-4 " style={{ margin: "-1px" }}>
          <div
            className="pb-4 "
            style={{
              border: "2px solid #000",
              overflow: "hidden",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <div className="bg-dark p-1 text-white text-center mb-3">
              <b>Password Settings</b>
            </div>
            <div className="pe-3 px-3">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div>
                    <TextField
                      label="Enter Your  Old Password"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange",backgroundColor:"#d9d9d9de" }}
                      margin="normal"
                      value={OldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <br/>
                  <div>
                    <TextField
                      label="Enter New Password"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange" }}
                      margin="normal"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Confirm New Password"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange" }}
                      margin="normal"
                      value={NewPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="container mb-5 mt-5 pb-5">
          <div className="row">
            <div className="col-lg-4"></div>

            <div className="col-lg-4">
              <button
                className="btn btn-dark text-warning d-block w-100"
                type="submit"
                style={{ fontWeight: "700" }}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <Footer /> */}
    </div>
  );
}

PasswordSetting.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
    token: PropTypes.string,
  }),
  BASEURL: PropTypes.string,
};
