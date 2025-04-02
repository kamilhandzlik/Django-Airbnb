import React from "react";
import PropTypes from "prop-types";
import "./MenuLink.css";
("use client");

const MenuLink = ({ label, onClick }) => {
  console.log("Label:", label);
  return (
    <div className="menu-link" onClick={onClick}>
      {label}
    </div>
  );
};

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuLink.defaultProps = {
  onClick: () => {},
};

export default MenuLink;
