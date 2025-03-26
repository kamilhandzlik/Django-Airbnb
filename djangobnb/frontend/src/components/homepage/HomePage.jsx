import React from "react";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import PropertyList from "../properties/PropertyList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <div>
        <PropertyList />
      </div>
    </>
  );
};

export default HomePage;
