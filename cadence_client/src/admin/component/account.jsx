import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import * as Icons from "@mui/icons-material";
import PropTypes from "prop-types";

export default function Account(props) {
  const UserData = props.UserData.data.user;
  console.log(UserData);
  const [FullName, setFullName] = useState(UserData.FullName);
  const [Email, setEmail] = useState(UserData.Email);

  return (
    <div>
      <div className="container " style={{ minHeight: "", paddingTop: "40px" }}>
        <div className="row ">
          <div className="col-lg-12 p-3 bg-white ">
            <b style={{ fontSize: "25px" }}>ADMIN ACCOUNT</b>
            <br></br>
            <span style={{ fontSize: "17px" }}>
              Admin account&apos;s information
            </span>
          </div>
        </div>
      </div>
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
              <div className="col-lg-4">
                <div className="mt-3" style={{ textAlign: "center" }}>
                  <div className="imgDiv">
                    <Icons.Person2Rounded
                      style={{ fontSize: "30px", marginTop: "80px" }}
                    />
                  </div>
                </div>
              </div>
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
            <Button
              style={{ fontSize: "15px", display: "none" }}
              variant="contained"
              fullWidth
              color="warning"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

Account.propTypes = {
  UserData: PropTypes.shape({
    data: PropTypes.object,
  }),
};
