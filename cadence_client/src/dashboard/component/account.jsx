import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Backdrop, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import PropTypes from "prop-types";

export default function Account(props) {
  const UserToken = props.UserData.token;

  const showAlert = (data) => {
    Swal.fire({
      title: data.title,
      text: data.text,
      icon: data.icon,
      confirmButtonText: data.button,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/account";
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

  const [FullName, setFullName] = useState(UserData.FullName);
  const [Email, setEmail] = useState(UserData.Email);
  const [Phone, setPhone] = useState(UserData.Phone);
  const [Gender, setGender] = useState(UserData.Gender);
  const [nationality, setNationality] = useState(UserData.Nationality);
  const [address, setAddress] = useState(UserData.Address);
  const [city, setCity] = useState(UserData.City);
  const [state, setState] = useState(UserData.State);

  const [fullnameNOK, setFullnameNOK] = useState(UserData.NOKFullName);
  const [relationshipNOK, setRelationshipNOK] = useState(
    UserData.NOKRelationship
  );
  const [phoneNOK, setPhoneNOK] = useState(UserData.NOKPhone);
  const [emailNOK, setEmailNOK] = useState(UserData.NOKEmail);
  const [addressNOK, setAddressNOK] = useState(UserData.NOKAddress);

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    //Loading
    openBackdrop();
    const formData = {
      Gender: Gender,
      Nationality: nationality,
      Address: address,
      City: city,
      State: state,
      Phone: Phone,
      NOKFullName: fullnameNOK,
      NOKRelationship: relationshipNOK,
      NOKPhone: phoneNOK,
      NOKEmail: emailNOK,
      NOKAddress: addressNOK,
    };
    try {
      const response = await axios.patch(
        `${props.BASEURL}api/v1/investors/${UserData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UserToken}`,
          },
        }
      );
      const LoginUser = JSON.parse(localStorage.getItem("LoginUser"));

      const loginresponse = await axios.post(
        `${props.BASEURL}api/v1/investors/login`,
        LoginUser.credentials,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token_here",
          },
        }
      );
      loginresponse.data.credentials = LoginUser.credentials;
      localStorage.setItem("LoginUser", JSON.stringify(loginresponse.data));
      console.log(response);

      showAlert({
        title: "Completed",
        text: "Profile Successfully Updated",
        icon: "success",
        button: "Ok", //onclick
        onclick: 'window.location = "/account/investments";',
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
            <b style={{ fontSize: "25px" }}>ACCOUNT</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              All your account&apos;s information
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmission} className="">
        <div className="container bg-light   mt-4 " style={{ margin: "-1px" }}>
          <div
            className="pb-4 "
            style={{
              border: "2px solid #ffc107",
              overflow: "hidden",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <div className="bg-warning p-1 text-white text-center mb-3">
              <b>Biodata</b>
            </div>
            <div className="pe-3 px-3">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange" }}
                      margin="normal"
                      value={FullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled
                    />
                  </div>
                  <div>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange" }}
                      margin="normal"
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      style={{ borderColor: "orange" }}
                      margin="normal"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="inputGender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="inputGender"
                      className="form-control"
                      value={Gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" defaultValue>
                        -- Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputNationality" className="form-label">
                      Nationality
                    </label>
                    <select
                      id="inputNationality"
                      className="form-control"
                      value={nationality}
                      onChange={(e) =>
                        setNationality(
                          e.target.value === "Other" ? "" : e.target.value
                        )
                      }
                    >
                      <option value="" disabled defaultValue>
                        -- Select Nationality
                      </option>
                      <option value="Nigerian">Nigerian</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputState" className="form-label">
                      State:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputCity" className="form-label">
                      City:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-light    " style={{ margin: "-1px" }}>
          <div
            className="pb-4 "
            style={{
              border: "2px solid #ffc107",
              overflow: "hidden",
            }}
          >
            <div className="bg-warning p-1 text-white text-center mb-3">
              <b>Next Of Kin</b>
            </div>
            <div className="pe-3 px-3">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="inputFullnameNOK" className="form-label">
                      NOK Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullnameNOK"
                      value={fullnameNOK}
                      onChange={(e) => setFullnameNOK(e.target.value)}
                      aria-describedby="fullnameHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputRelationship" className="form-label">
                      Relationship with Next of Kin:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputRelationship"
                      value={relationshipNOK}
                      onChange={(e) => setRelationshipNOK(e.target.value)}
                      aria-describedby="relationshipHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPhoneNOK" className="form-label">
                      NOK Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhoneNOK"
                      value={phoneNOK}
                      onChange={(e) => setPhoneNOK(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailaddressNOK" className="form-label">
                      NOK Email Address (Optional):
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailaddressNOK"
                      value={emailNOK}
                      onChange={(e) => setEmailNOK(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputAddressNOK" className="form-label">
                      Address of Next of Kin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddressNOK"
                      value={addressNOK}
                      onChange={(e) => setAddressNOK(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
              <button className="btn btn-success d-block w-100" type="submit">
                Submit Profile
              </button>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </form>
      {/* <Footer /> */}
    </div>
  );
}

Account.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
    token: PropTypes.string,
  }),
  BASEURL: PropTypes.string,
};
