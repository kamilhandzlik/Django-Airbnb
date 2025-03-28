import React from "react";
import "./MyProperties.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";

const MyProperties = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main>
        <h1>My properties</h1>
      </main>
    </>
  );
};

export default MyProperties;
