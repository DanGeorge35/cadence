import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, content, showModal } = this.props;

    return (
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h5 className="modal-title" id="staticBackdropLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={this.props.toggleModal}
              ></button>
            </div>

            <div className="modal-body" style={{ backgroundColor: "beige" }}>
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired, // Make sure it's a function and required
  title: PropTypes.string.isRequired, // A required string prop
  showModal: PropTypes.bool.isRequired, // A required string prop
  content: PropTypes.node,
};

export default Modal;
