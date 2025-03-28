import React from "react";
import "./MyReservations.css";
import NavBar from "../navbar/Navbar";
import Categories from "../categories/Categories";

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
          <div className="my-reservations-page-reservations">asdfa</div>
          <div className="my-reservations-page-reservations">asdfa</div>
        </div>
      </main>
    </>
  );
};

export default MyResevations;
