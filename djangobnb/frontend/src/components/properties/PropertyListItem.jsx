import React from "react";
import "./PropertyListItem.css";
import BeachHouse from "../images/beach_house_1.jpg";

const PropertyListItem = () => {
  return (
    <div className="property-list-item-pointer">
      <div className="property-list-item">
        <img
          src={BeachHouse}
          alt="Beach House"
          className="property-list-item-image"
        />
      </div>
      <div className="property-list-item-content">
        <div className="property-list-item-text-large">Property name</div>
        <div className="property-list-item-text-small">
          <p>
            {/*  TODO change 200 to proper name in model when backend is added */}
            <strong>$200 </strong>
            per night
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
