import React from "react";
import "./MyReservations.css";
import NavBar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import BeachHouse from "../images/beach_house_1.jpg";

const MyResevations = () => {
  return (
    <>
      <NavBar />
      <div className="pt-24">
        <Categories />
      </div>
      <main className="container">
        <h1 className="my-reservations-text-title">My reservations</h1>
        <div className="my-reservations-page-grid">
          <div className="my-reservations-page-reservations">
            <div className="my-reservations-row">
              <div className="property-image">
                <img
                  src={BeachHouse}
                  alt="beach-house"
                  className="property-image"
                />
              </div>
              <div>
                <div className="my-reservations-text-property-name">
                  Property Name
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Check in date:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    14/04/2025
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Check out date:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    15/04/2025
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Number of nights:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    1
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Total price:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    $100
                  </p>
                </div>
                <br />
                <div className="property-button">
                  <h1 className="property-button-text">Go to property</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="my-reservations-page-reservations">
            <div className="my-reservations-row">
              <div className="property-image">
                <img
                  src={BeachHouse}
                  alt="beach-house"
                  className="property-image"
                />
              </div>
              <div>
                <div className="my-reservations-text-property-name">
                  Property Name
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Check in date:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    14/04/2025
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Check out date:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    15/04/2025
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Number of nights:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    1
                  </p>
                </div>
                <div className="my-reservations-page-details">
                  <p className="my-reservations-text-property-details">
                    Total price:
                  </p>
                  <p className="my-reservations-text-property-descriptions">
                    $100
                  </p>
                </div>
                <br />
                <div className="property-button">
                  <h1 className="property-button-text">Go to property</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyResevations;
