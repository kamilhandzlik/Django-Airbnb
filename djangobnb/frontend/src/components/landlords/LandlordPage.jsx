import React from "react";
import "./LandlordPage.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import ProfilePic from "../images/temporary/profile_pic.jpg";
import PropertyList from "../properties/PropertyList";

const LandlordPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main className="container">
        <div className="landlord-page-grid">
          <aside className="landlord-page-column">
            <div className="profile-card">
              <img
                src={ProfilePic}
                alt="profile-image"
                className="profile-image"
              />
              <h1 className="profile-name">Landlord Name</h1>
              <button className="contact-button">Contact</button>
            </div>
          </aside>
          <div className="landlord-page-properties">
            <h2 className="property-list-text">Properties</h2>
            <div className="property-list">
              <PropertyList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandlordPage;
