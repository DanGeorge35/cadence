import React, { Component } from "react";
import { Modal } from "@mui/material";

class JoinUs extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  modelContent = () => (
    <div>
      <h4 className="fw-bold mt-2" style={{ color: "#333" }}>
        Coming Soon!
      </h4>
      <div className="modal-body text-muted mt-3">
        <p>
          We&apos;re currently preparing this feature. Stay tuned for updates!
        </p>
      </div>
      <div className="modal-footer text-center mt-4 d-block">
        <button
          className="btn btn-warning close-modal-btn"
          style={{ borderRadius: "50px", padding: "10px 30px", border: "none" }}
          onClick={this.toggleModal}
        >
          Got It!
        </button>
      </div>
    </div>
  );

  render() {
    const { showModal } = this.state;

    return (
      <div className="text-white" style={{ backgroundColor: "#001119f9" }}>
        <div
          style={{
            backgroundImage: "url(fam2.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundColor: "#ffe3b4",
          }}
        >
          <div style={{ height: "150px", backgroundColor: "#0000006e" }}></div>
        </div>
        <div className="container pt-4 pb-3">
          <div className="pt-lg-5 pt-1 pb-5 pe-3 px-3">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="pb-3 text-primary-color text-center">
                  Invest with Cadence
                </h1>
                <div
                  className="fontFam3"
                  style={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Looking for a reliable way to grow your income? Cadence offers
                  you the opportunity to earn consistent returns through
                  property investments.
                  <br />
                  <br />
                  With Cadence, you don&apos;t need to own a shortlet apartment
                  to enjoy steady income. By investing with us, you&apos;ll earn
                  <b>5% monthly returns</b> on your investment, plus exclusive
                  benefits like <b>up to 15% discounts on bookings</b> and{" "}
                  <b>2.5% referral commissions</b> when you refer others.
                  <br />
                  <br />
                  Our properties are consistently booked for 20 to 28 nights
                  every month, making certain reliable income for our investors.
                  And if you&apos;re interested in owning your own shortlet
                  apartment, we&apos;ll guide you through the setup process
                  <b>absolutely free</b>.
                  <br />
                  <br />
                  We&apos;re excited to announce our expansion into new
                  locations, giving you even more opportunities to grow with
                  Cadence. Your investment with us is safe, rewarding, and
                  contributes to the growth of a trusted brand.
                  <br />
                  <br />
                  Don&apos;t wait—take the first step towards financial freedom
                  today! For inquiries, contact us at
                  <b>
                    <a href="mailto:admin@cadencepub.com">
                      admin@cadencepub.com.
                    </a>
                  </b>
                  <br />
                  <br />
                  Let&apos;s build Cadence together!
                </div>
                <div className="py-4">
                  <button
                    className="btn btn-warning py-2 fontFam4"
                    style={{
                      minWidth: "200px",
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                    onClick={this.toggleModal}
                  >
                    Invest Now &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(fam2.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundColor: "#ffe3b4",
          }}
        >
          <div style={{ height: "150px", backgroundColor: "#0000006e" }}></div>
        </div>
        <Modal open={showModal} onClose={this.toggleModal}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "400px",
                width: "90%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
              }}
            >
              {this.modelContent()}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default JoinUs;
