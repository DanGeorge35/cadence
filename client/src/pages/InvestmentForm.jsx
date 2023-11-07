import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class InvestmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      role: "",
      link: "",
      whatsapp: "",
    };
  }

  handleFormSubmission = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any form submission logic here, e.g., send data to a server
    console.log("fullname:", this.state.fullname);
    console.log("email:", this.state.email);
    console.log("link:", this.state.link);
    console.log("role:", this.state.role);
    console.log("whatsapp:", this.state.whatsapp);

    // Reset the form fields
    this.setState({
      fullname: "",
      email: "",
      role: "",
      link: "",
      whatsapp: "",
    });
  };

  render() {
    return (
      <div>
        <Header />

        <div style={{ height: "80px" }}></div>
        <div
          className=" text-white"
          style={{ backgroundColor: "#001119f9", paddingTop: "40px" }}
        >
          <h1 className="pt-5 pb-5 text-center">
            Cadence Investment: 50% annual ROI
          </h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 offset-lg-4">
                <form
                  onSubmit={this.handleFormSubmission}
                  className="invesmentform"
                >
                  <div className="pb-4">
                    <label className="tag">Personal Information</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputFullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullname"
                      value={this.state.fullname}
                      onChange={(e) =>
                        this.setState({ fullname: e.target.value })
                      }
                      aria-describedby="fullnameHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputGender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="inputGender"
                      className="form-control"
                      value={this.state.gender}
                      onChange={(e) =>
                        this.setState({ gender: e.target.value })
                      }
                    >
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
                      value={this.state.nationality}
                      onChange={(e) =>
                        this.setState({ nationality: e.target.value })
                      }
                    >
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
                      value={this.state.address}
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputCity" className="form-label">
                      City/State:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      value={this.state.city}
                      onChange={(e) => this.setState({ city: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailaddress"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="pt-4 pb-4">
                    <label className="tag">Investment Information</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputAmount" className="form-label">
                      Investment Amount
                    </label>
                    <select
                      id="inputAmount"
                      className="form-control"
                      value={this.state.amount}
                      onChange={(e) =>
                        this.setState({ amount: e.target.value })
                      }
                    >
                      <option value="0" disabled selected>
                        -- Select Amount
                      </option>
                      <option value="50000">50,000</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="inputDuration" className="form-label">
                      Investment Duration
                    </label>
                    <select
                      id="inputDuration"
                      className="form-control"
                      value={this.state.duration}
                      onChange={(e) =>
                        this.setState({ duration: e.target.value })
                      }
                    >
                      <option value="0" disabled selected>
                        -- Select Duration
                      </option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                    </select>
                  </div>

                  <div className="pt-4 pb-4">
                    <label className="tag">Next of Kin Information</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputFullnameNOK" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFullnameNOK"
                      value={this.state.fullnameNOK}
                      onChange={(e) =>
                        this.setState({ fullnameNOK: e.target.value })
                      }
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
                      value={this.state.relationshipNOK}
                      onChange={(e) =>
                        this.setState({ relationshipNOK: e.target.value })
                      }
                      aria-describedby="relationshipHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPhoneNOK" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhoneNOK"
                      value={this.state.phoneNOK}
                      onChange={(e) =>
                        this.setState({ phoneNOK: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailaddressNOK" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailaddressNOK"
                      value={this.state.emailNOK}
                      onChange={(e) =>
                        this.setState({ emailNOK: e.target.value })
                      }
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
                      value={this.state.addressNOK}
                      onChange={(e) =>
                        this.setState({ addressNOK: e.target.value })
                      }
                    />
                  </div>
                  <p className="p-3"></p>

                  <button type="submit" className="btn btn-warning w-100">
                    Submit
                  </button>
                  <p className="p-5"></p>
                  <p className="p-5"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InvestmentForm;
