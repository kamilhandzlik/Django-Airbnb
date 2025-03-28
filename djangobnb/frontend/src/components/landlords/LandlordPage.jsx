import React from "react";
import "./LandlordPage.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";

const LandlordPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
    </>
  );
};

export default LandlordPage;
