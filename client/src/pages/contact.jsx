import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Contact() {
  // Define a state to manage form submission
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [link, setLink] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", fullname);
    console.log("email:", email);
    console.log("link:", link);
    console.log("role:", role);

    // Reset the form fields
    setFullname("");
    setEmail("");
    setRole("");
    setLink("");
  };

  return (
    <div>
      <Header />
      <div className="about-page ">
        <div className="d-flex   align-items-center justify-content-center">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="container">
            <div className="pt-5  pe-3 px-3">
              <h1 className="pb-4 text-center fontFam4 pb-5 ">
                Locations for Food, Fun and Friends
              </h1>
              <div className="row">
                <div className="col-lg-3  fontFam0  ">
                  <img
                    className="d-lg-block d-none"
                    src="./plate1.png"
                    style={{
                      width: "150%",
                      marginTop: "-20%",
                      marginLeft: "-20%",
                      filter: "blur(2px)",
                    }}
                  />
                </div>
                <div
                  className="col-lg-6 p-4 pt-5"
                  style={{
                    backgroundColor: "#00000047",
                    borderRadius: "10px",
                    zIndex: "1",
                    boxShadow: "0px 0px 10px #999",
                  }}
                >
                  <form onSubmit={handleFormSubmission}>
                    <div className="mb-3">
                      <input
                        placeholder="Name"
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
                      <input
                        placeholder="Email Address"
                        type="email"
                        className="form-control  "
                        id="emailaddress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        placeholder="Subject"
                        type="link"
                        className="form-control"
                        id="link"
                        value={link}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        placeholder="Enter your message"
                        className="form-control"
                        style={{ height: "200px", width: "100%" }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-warning  w-100">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-3  fontFam0  ">
                  <img
                    className="d-lg-block d-none"
                    src="./plate1.png"
                    style={{
                      width: "150%",
                      marginTop: "-20%",
                      marginLeft: "-20%",
                      filter: "blur(2px)",
                    }}
                  />
                </div>
              </div>
              <p style={{ paddingTop: "50px" }}></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
