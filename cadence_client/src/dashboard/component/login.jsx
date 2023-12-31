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

              <input
                className="form-control"
                type="password"
                name="password"
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
