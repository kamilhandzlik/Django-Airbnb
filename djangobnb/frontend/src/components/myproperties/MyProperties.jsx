import React from "react";
import "./MyProperties.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import PropertyList from "../properties/PropertyList";

const MyProperties = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main>
        <h1 className="property-list-text">My properties</h1>
        <PropertyList />
      </main>
    </>
  );
};

export default MyProperties;
