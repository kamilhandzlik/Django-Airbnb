import PropertyListItem from "./PropertyListItem";
import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="property-grid">
      <div className="property-item">
        <PropertyListItem />
      </div>
      <div className="property-item">
        <PropertyListItem />
      </div>
      <div className="property-item">
        <PropertyListItem />
      </div>
    </div>
  );
};

export default PropertyList;
