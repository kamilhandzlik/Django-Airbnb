import React from "react";
import "./Modal.css";
import PropTypes, { string } from "prop-types";

const Modal = ({ label, content }) => {
  return (
    <div className="modal-container">
      <div className="modal-position">
        <div className="modal-content">
          <div className="modal-box">
            <header className="modal-header">
              <div className="modal-close-button">✖</div>
              <h2 className="modal-header-text">{label}</h2>
            </header>
            <section className="p-6">
              {content || <p>No content provided</p>}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.node,
};

export default Modal;
