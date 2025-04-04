import React from "react";
import "./SignUpModal.css";
import Modal from "./Modal";
import { useSignUpModal } from "../hooks/SignUpModalContext.jsx";

const SignUpModal = () => {
  const { isOpen, closeModal } = useSignUpModal();

  const content = (
    <>
      <form className="sign-up-form">
        <input
          placeholder="First name"
          type="first_name"
          className="sign-up-form-inputfield"
        />
        <input
          placeholder="Surname"
          type="surname_name"
          className="sign-up-form-inputfield"
        />
        <input
          placeholder="Usernam"
          type="surname_name"
          className="sign-up-form-inputfield"
        />
        <input
          placeholder="Enter your email address"
          type="email"
          className="sign-up-form-inputfield"
        />
        <input
          placeholder="Your password"
          type="password"
          className="sign-up-form-inputfield"
        />
        <input
          placeholder="Repeat password"
          type="password"
          className="sign-up-form-inputfield"
        />

        <br />
        <div className="sign-up-form-error-message">
          <p>The error message</p>
        </div>
        <hr className="sign-up-form-divider" />
        <button type="submit" className="sign-up-button">
          <h1 className="sign-up-button-text">Submit</h1>
        </button>
      </form>
    </>
  );

  return (
    <Modal
      label="Sign up"
      content={content}
      isOpen={isOpen}
      closeModal={closeModal}
    />
  );
};

export default SignUpModal;
