import React, { useState } from "react";
import "./SignUpModal.css";
import Modal from "./Modal";
import { useSignUpModal } from "../hooks/SignUpModalContext.jsx";
import { useNavigate } from "react-router-dom";
import apiService from "../services/apiService.jsx";

const SignUpModal = () => {
  const { isOpen, closeModal } = useSignUpModal();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (formData.password1 !== formData.password2) {
      setErrors(["Passwords do not match"]);
      return;
    }

    try {
      const response = await apiService.postWithoutToken(
        "/api/auth/register/",
        JSON.stringify({
          email: formData.email,
          password1: formData.password1,
          password2: formData.password2,
        })
      );

      if (isDev) console.log("Registration response:", response);

      if (response.access) {
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
        closeModal();
        navigate("/");
      } else if (response.detail) {
        setErrors([response.detail]);
      } else {
        const errorMessages = [];

        Object.keys(response).forEach((key) => {
          const errors = response[key];
          if (Array.isArray(errors)) {
            errors.forEach((error) => errorMessages.push(`${key}: ${error}`));
          } else if (typeof errors === "string") {
            errorMessages.push(`${key}: ${errors}`);
          }
        });

        setErrors(
          errorMessages.length > 0 ? errorMessages : ["Validation failed"]
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrors(["Unexpected error occurred. Please try again later."]);
    }
  };

  const content = (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Enter your email address"
        type="email"
        className="sign-up-form-inputfield"
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <input
        name="password1"
        placeholder="Your password"
        type="password"
        className="sign-up-form-inputfield"
        onChange={handleChange}
        required
        autoComplete="new-password"
      />
      <input
        name="password2"
        placeholder="Repeat password"
        type="password"
        className="sign-up-form-inputfield"
        onChange={handleChange}
        required
        autoComplete="new-password"
      />
      <br />
      {errors.length > 0 && (
        <div className="sign-up-form-error-message">
          {errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}

      <hr className="sign-up-form-divider" />

      <button type="submit" className="sign-up-button">
        <h1 className="sign-up-button-text">Submit</h1>
      </button>
    </form>
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
