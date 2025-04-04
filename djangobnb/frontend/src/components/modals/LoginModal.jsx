import React from "react";
import "./LoginModal.css";
import Modal from "./Modal";
import { useLoginModal } from "../hooks/LoginModalContext.jsx";

const LoginModal = () => {
  const { isOpen, closeModal } = useLoginModal();

  const content = <h2>Welcome to Django Bnb, please log in</h2>;
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
