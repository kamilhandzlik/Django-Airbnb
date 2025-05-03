import React from "react";
import PropTypes from "prop-types";
import "./MenuLink.css";
("use client");

const MenuLink = ({ label, onClick, href }) => {
  if (isDev) "Label:", label;
  return (
    <a className="menu-link" onClick={onClick} href={href}>
      {label}
    </a>
  );
};

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

MenuLink.defaultProps = {
  onClick: () => {},
  href: "#",
};

export default MenuLink;
