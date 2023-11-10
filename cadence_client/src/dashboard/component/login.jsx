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
                <b>Account Login</b>
              </h5>
              <div className=" text-center text-warning  fontFam2 pb-4">
                Login to your account
              </div>

              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <br />
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />

              <br />
              <FormControlLabel
                control={<Checkbox color="warning" defaultChecked />}
                label="Remember Me"
              />
              <br></br>
              <br></br>

              <button className="btn w-100 btn-warning" type="submit">
                SIGN IN
              </button>
              <div className="text-white text-center pt-3">
                Dont have an account?
                <a href="/signup" className="text-warning d-block">
                  <b>Sign Up</b>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
