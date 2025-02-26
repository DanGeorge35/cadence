import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Contact() {
  // Define a state to manage form submission
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Subject, setSubject] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", fullname);
    console.log("email:", email);
    console.log("Subject:", Subject);
    console.log("message:", message);

    // Redirect to the desired email format
    const emailFormat = `mailto:contact@cadencepub.com?subject=${encodeURIComponent(
      fullname
    )}(${encodeURIComponent(email)}) : ${encodeURIComponent(
      Subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = emailFormat;
  };

  return (
    <div>
      <Header />
      <div className="about-page ">
        <div className="d-flex   align-items-center justify-content-center">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="w3-black">
        <div
          className=""
          style={{
            backgroundImage: `url(./home1.jpg)`,
            backgroundPosition: "center",
          }}
        >
          <div
            className="pt-5  pe-3 px-3 w3-display-container"
            style={{ minHeight: "100vh", backgroundColor: "#000000db" }}
          >
            <div className="w3-display-middle" style={{ width: "100vw" }}>
              <h1 className="pb-4 text-center fontFam4 pb-5 ">
                Experience Luxury, Embrace Comfort
              </h1>
              <div className="row">
                <div
                  className="col-lg-6 p-4 pt-5 offset-lg-3"
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
                        className="form-control   bg-white"
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
                        className="form-control  bg-white"
                        id="emailaddress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        placeholder="Subject"
                        type="text"
                        className="form-control  bg-white"
                        id="Subject"
                        value={Subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        placeholder="Enter your message"
                        className="form-control  bg-white"
                        style={{ height: "200px", width: "100%" }}
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-warning  w-100">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-3  fontFam0  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
