// PropertyList.js
"use client";
import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css";

/**
 * @typedef {Object} PropertyType
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {number} price_per_night
 */

const PropertyList = () => {
  /** @type {[Array<PropertyType>, Function]} */
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    console.log("Attempting to fetch properties...");
    const url = "http://localhost:8000/api/properties/";
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log("json:", json);
      setProperties(json.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      {Array.isArray(properties) ? (
        properties.map((property) => (
          <div className="property-grid" key={property.id}>
            <div className="property-item">
              <PropertyListItem key={property.id} property={property} />
            </div>
          </div>
        ))
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
};

export default PropertyList;
