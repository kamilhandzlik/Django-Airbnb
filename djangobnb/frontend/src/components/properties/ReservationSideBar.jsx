import React from "react";
import "./ReservationSideBar.css";

const ReservationSideBar = () => {
  return (
    <aside className="reservation-sidebar">
      {/* TODO change 200 to proper name from model when backend is added */}
      <div className="reservation-sidebar-text-price">$200 per night</div>
      <div className="reservation-sidebar-guests">
        <label htmlFor="guests" className="reservation-sidebar-label">
          Guests
        </label>
        <select id="guests" className="reservation-sidebar-select">
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
        </select>
      </div>
      <br></br>
      <br></br>
      <div className="book-button">
        <div className="book-button-text">Book</div>
      </div>
    </aside>
  );
};

export default ReservationSideBar;
