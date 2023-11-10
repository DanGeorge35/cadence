import React, { useState } from "react";

function Form() {
  // Define a state to manage form submission
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [link, setLink] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", fullname);
    console.log("email:", email);
    console.log("link:", link);
    console.log("role:", role);
    console.log("whatsapp:", whatsapp);

    // Reset the form fields
    setFullname("");
    setEmail("");
    setRole("");
    setLink("");
  };

  return (
    <div>
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
            onChange={(e) => setEmail(e.target.value)}
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
}

export default Form;
