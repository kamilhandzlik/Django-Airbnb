"use client";
import { useEffect } from "react";
import PropertyListItem from "./PropertyListItem";
import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  const getProperties = async () => {
    console.log("Attempting to fetch properties...");
    const url = "http://localhost:8000/api/properties/";
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log("json:", json);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect fired!");
    getProperties();
  }, []);

  return (
    <div className="property-grid">
      <h2 style={{ color: "red" }}>Hello from PropertyList!</h2>
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
