import React, { useState } from "react";
import "./AddPropertyModal.css";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import apiService from "../services/apiService.jsx";
import PropTypes from "prop-types";

const AddPropertyModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price_per_night: "",
    bedrooms: "",
    bathrooms: "",
    guests: "",
    country: "",
    country_code: "",
    category: "",
    image: null,
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await apiService.postProperty(formData);
      if (isDev) console.log("Property added:", response);
      closeModal();
    } catch (error) {
      if (isDev) console.error("Failed to add property:", error);
      setErrors(["Failed to add property. Please try again."]);
    }
  };

  const content = (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Property name (e.g. Cozy cabin in the woods)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Short description (e.g. Lakeside house perfect for weekends)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="price_per_night"
        placeholder="Price per night (e.g. 250)"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="bedrooms"
        placeholder="Number of bedrooms"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="bathrooms"
        placeholder="Number of bathrooms"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="guests"
        placeholder="Maximum number of guests"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="country"
        placeholder="Country (e.g. Poland)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <input
        name="country_code"
        placeholder="Country code (e.g. PL)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category (e.g. Apartment, House, Campervan)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        required
      />

      <button type="submit" className="sign-up-button">
        <h1 className="sign-up-button-text">Submit</h1>
      </button>
    </form>
  );

  return (
    <Modal
      label="Add Property"
      content={content}
      isOpen={isOpen}
      closeModal={closeModal}
    />
  );
};

AddPropertyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddPropertyModal;
