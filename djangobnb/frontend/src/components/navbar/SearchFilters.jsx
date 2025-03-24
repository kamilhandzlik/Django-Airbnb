import React from "react";
import "./SearchFilter.css";

const SearchFilters = () => {
  return (
    <div className="search__filter">
      <div className="search__filter__container">
        <div className="search__filter__field__1">
          <p className="search__filter__text">Where</p>
          <p className="search__filter__text">Wanted Location</p>
        </div>
      </div>
      <div className="search__filter__container">
        <div className="search__filter__field__2">
          <p className="search__filter__text">Check in</p>
          <p className="search__filter__text">Add dates</p>
        </div>
      </div>
      <div className="search__filter__container">
        <div className="search__filter__field__2">
          <p className="search__filter__text">Check out</p>
          <p className="search__filter__text">Add dates</p>
        </div>
      </div>
      <div className="search__filter__container">
        <div className="search__filter__field__2">
          <p className="search__filter__text">Who</p>
          <p className="search__filter__text">Add guests</p>
        </div>
      </div>
      <div className="search__filter__container">
        <div className="search__button">
          <div className="search__button__text">
            <box-icon name="search" color="#ffffff" size="1.5rem"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
