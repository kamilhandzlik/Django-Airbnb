import React, { useState } from "react";
import "./LoginModal.css";
import Modal from "./Modal";
import { useLoginModal } from "../hooks/LoginModalContext.jsx";
import apiService from "../services/apiService";
import { handleLogin } from "../lib/actions";
import { useNavigate } from "react-router-dom";

const isDev = import.meta.env.DEV;

const LoginModal = () => {
  const { isOpen, closeModal } = useLoginModal();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const loginData = {
        email: email,
        password: password,
      };

      if (isDev) console.log("Sending login data:", loginData);

      const response = await apiService.post("/api/auth/login/", loginData);
      if (isDev) console.log("Login response:", response);

      if (response.access && response.refresh && response.user) {
        let userId = null;
        if (response.user.pk) {
          userId = response.user.pk;
        } else if (response.user.id) {
          userId = response.user.id;
        } else if (response.user_id) {
          userId = response.user_id;
        }

        if (isDev) console.log("Extracted userId:", userId);

        if (userId) {
          handleLogin(userId, response.access, response.refresh);

          closeModal();

          window.location.reload();
        } else {
          setErrorMessage("User ID cannot br downloaded from server response.");
          console.error("User ID not found in response:", response);
        }
      } else {
        setErrorMessage("Invalid server response. Please try again.");
        console.error("Invalid server response structure:", response);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const content = (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email address"
          type="email"
          className="login-form-inputfield"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          placeholder="Your password"
          type="password"
          className="login-form-inputfield"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <br />
        {errorMessage && (
          <div className="login-form-error-message">
            <p>{errorMessage}</p>
          </div>
        )}
        <hr className="login-form-divider" />
        <button type="submit" className="login-button" disabled={isLoading}>
          <h1 className="login-button-text">
            {isLoading ? "Logging in" : "Submit"}
          </h1>
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
