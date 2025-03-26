import React from "react";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import "./PropertyDetailPage.css";
import BeachHouse from "../images/beach_house_1.jpg";
import ProfilePic from "../images/temporary/profile_pic.jpg";
import ReservationSideBar from "./ReservationSideBar";

const PropertyDetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main className="property-detail-page">
        <div className="property-detail-page__container">
          <img
            src={BeachHouse}
            alt="Beach-house"
            className="property-detail-page__image"
          />
        </div>
        <div className="property-detail-page-grid">
          <div className="property-detail-page-grid-left">
            <h1 className="property-list-detail-text-large">Property Name</h1>
            <span className="property-list-detail-text-small">
              4 guest - 2 bedrooms - 1 bathroom
            </span>
            <div className="profile-image">
              <img
                src={ProfilePic}
                // TODO change this source to proper user image when you make backend also change alt to {{ user.name }}
                width={50}
                height={50}
                className="rounded"
                alt="The user name"
              />
              <div className="property-list-detail-text-small">
                {/* {{ user.name }} is your host*/}
                Jonh Doe is your host
              </div>
            </div>
            <div className="property-list-detail-text-large">Description</div>
            <div className="property-list-detail-text-description">
              lorem ipsum
            </div>
          </div>
          <div className="property-detail-page-grid-right">
            <ReservationSideBar />
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetailPage;
