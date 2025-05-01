import "./AddPropertyButton.css";
import AddPropertyModal from "../modals/AddPropertyModal";
import React, { useState } from "react";

const AddPropertyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="add__property__button" onClick={handleToggleMenu}>
        <div className="add-property-text">DjangoBnb & your home</div>
      </div>
      {isOpen && (
        <AddPropertyModal isOpen={isOpen} closeModal={handleCloseModal} />
      )}
    </>
  );
};

export default AddPropertyButton;
