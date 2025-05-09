import React from "react";
import "./PropertyListItem.css";
import BeachHouse from "../images/beach_house_1.jpg";

/**
 * @typedef {Object} PropertyType
 * @property {string} id
 * @property {string} title
 * @property {number} price_per_night
 */

/**
 * @param {{ property: PropertyType }} props
 */
const PropertyListItem = ({ property }) => {
  return (
    <div className="property-list-item-pointer">
      <div className="property-list-item">
        <img
          src={property.image_url}
          alt={property.title}
          className="property-list-item-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = { BeachHouse };
          }}
        />
      </div>
      <div className="property-list-item-content">
        <div className="property-list-item-text-large">{property.title}</div>
        <div className="property-list-item-text-small">
          <p>
            <strong>{property.price_per_night} </strong>
            per night
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
