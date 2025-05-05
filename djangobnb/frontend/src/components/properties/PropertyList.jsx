// PropertyList.js
"use client";
import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css";
import apiService from "../services/apiService";

const isDev = import.meta.env.DEV;

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
    try {
      if (isDev) console.log("Fetching properties...");
      const tmpProperties = await apiService.get("/api/properties/");
      setProperties(tmpProperties.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    apiService.get("/api/properties/");

    getProperties();
  }, []);

  return (
    <div className="property-grid">
      {Array.isArray(properties) ? (
        properties.map((property) => (
          <div className="property-item" key={property.id}>
            <PropertyListItem property={property} />
          </div>
        ))
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
};

export default PropertyList;
