import React, { useState, useEffect } from "react";
import "./AddPropertyModal.css";
import Modal from "./Modal";
import apiService from "../services/apiService.jsx";
import PropTypes from "prop-types";
import ImageUpload from "./ImageUpload.jsx";
const isDev = import.meta.env.DEV;

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);

    try {
      // Upewnij się, że wszystkie pola numeryczne są liczbami
      const dataToSend = {
        ...formData,
        price_per_night: parseInt(formData.price_per_night),
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        guests: parseInt(formData.guests),
      };

      const response = await apiService.postProperty(dataToSend);
      if (isDev) console.log("Property added:", response);
      closeModal();
      // Opcjonalnie: odśwież listę nieruchomości lub przekieruj użytkownika
    } catch (error) {
      if (isDev) console.error("Failed to add property:", error);
      if (error.response && error.response.data) {
        // Jeśli serwer zwrócił szczegółowe błędy
        const serverErrors = Object.values(error.response.data).flat();
        setErrors(serverErrors);
      } else {
        setErrors(["Failed to add property. Please try again."]);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Renderowanie błędów
  const renderErrors = () => {
    if (errors.length === 0) return null;

    return (
      <div className="error-messages">
        {errors.map((error, index) => (
          <p key={index} className="error-message">
            {error}
          </p>
        ))}
      </div>
    );
  };

  const content = (
    <form onSubmit={handleSubmit}>
      {renderErrors()}

      <input
        name="title"
        placeholder="Property name (e.g. Cozy cabin in the woods)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.title}
        required
      />

      <input
        name="description"
        placeholder="Short description (e.g. Lakeside house perfect for weekends)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.description}
        required
      />

      <input
        name="price_per_night"
        placeholder="Price per night (e.g. 250)"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.price_per_night}
        required
      />

      <input
        name="bedrooms"
        placeholder="Number of bedrooms"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.bedrooms}
        required
      />

      <input
        name="bathrooms"
        placeholder="Number of bathrooms"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.bathrooms}
        required
      />

      <input
        name="guests"
        placeholder="Maximum number of guests"
        type="number"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.guests}
        required
      />

      <input
        name="country"
        placeholder="Country (e.g. Poland)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.country}
        required
      />

      <input
        name="country_code"
        placeholder="Country code (e.g. PL)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.country_code}
      />

      <input
        name="category"
        placeholder="Category (e.g. Apartment, House, Campervan)"
        type="text"
        className="property-form-inputfield"
        onChange={handleChange}
        value={formData.category}
        required
      />

      <ImageUpload onFileSelect={handleFileSelect} />

      <button type="submit" className="sign-up-button" disabled={isSubmitting}>
        <h1 className="sign-up-button-text">
          {isSubmitting ? "Submitting..." : "Submit"}
        </h1>
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
