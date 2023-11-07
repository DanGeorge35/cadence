import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function Register() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Register form */}
            <form action="#" method="POST" className="p-2">
              <h5 className=" text-center text-white pt-4 ">
                <b>Register Account</b>
              </h5>
              <div className=" text-center text-warning  fontFam2 pb-5">
                You can register your account
              </div>

              <input
                className="form-control"
                type="text"
                name="firstname"
                placeholder="Firstname"
              />
              <br />
              <input
                className="form-control"
                type="text"
                name="lastname"
                placeholder="Lastname"
              />
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <br />

              <FormControlLabel
                control={<Checkbox color="warning" defaultChecked />}
                label="I agree to terms and condition"
              />

              <br></br>
              <br></br>

              <button className="btn w-100 btn-warning" type="submit">
                SIGN UP
              </button>
              <div className="text-white text-center pt-3">
                Already had an account?
                <a href="/signin" className="text-warning d-block">
                  <b>Sign In</b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
