import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import PropTypes from "prop-types";

const Modal = ({ label, content, isOpen, closeModal }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);

    setTimeout(() => {
      closeModal();
    }, 300);
  }, [closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal-container ${showModal ? "show" : ""}`}>
      <div className="modal-position">
        <div className="modal-content">
          <div className="modal-box">
            <header className="modal-header">
              <div className="modal-close-button" onClick={handleClose}>
                ✖
              </div>
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
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
