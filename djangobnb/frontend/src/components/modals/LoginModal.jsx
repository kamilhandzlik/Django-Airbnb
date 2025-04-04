import React from "react";
import "./LoginModal.css";
import Modal from "./Modal";
import { useLoginModal } from "../hooks/LoginModalContext.jsx";

const LoginModal = () => {
  const { isOpen, closeModal } = useLoginModal();

  const content = (
    <>
      <form className="login-form">
        <input
          placeholder="Enter your email address"
          type="email"
          className="login-form-inputfield"
        />
        <input
          placeholder="Your password"
          type="password"
          className="login-form-inputfield"
        />

        <br />
        <div className="login-form-error-message">
          <p>The error message</p>
        </div>
        <hr className="login-form-divider" />
        <button type="submit" className="login-button">
          <h1 className="login-button-text">Submit</h1>
        </button>
      </form>
    </>
  );

  return (
    <Modal
      label="Log in"
      content={content}
      isOpen={isOpen}
      closeModal={closeModal}
    />
  );
};

export default LoginModal;
