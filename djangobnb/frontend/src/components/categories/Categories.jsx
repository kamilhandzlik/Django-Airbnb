import React from "react";
import "./Categories.css";
import Amazing from "../../assets/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg";
import SwimmingPools from "../../assets/3fb523a0-b622-4368-8142-b5e03df7549b.jpg";
import Lakeside from "../../assets/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg";
import Smallhouses from "../../assets/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg";
import BeautifulViews from "../../assets/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg";
import Skislope from "../../assets/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg";
import DomeHouses from "../../assets/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg";
import TreeHouses from "../../assets/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg";

const Categories = () => {
  return (
    <main className="categories">
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={Amazing}
          alt="Category-Amazing"
        />
        Amazing
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={SwimmingPools}
          alt="Category-Amazing"
        />
        Swimming pools
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={Lakeside}
          alt="Category-Amazing"
        />
        Lakeside
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={Smallhouses}
          alt="Category-Amazing"
        />
        Small Houses
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={BeautifulViews}
          alt="Category-Amazing"
        />
        Beautiful Views
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={Skislope}
          alt="Category-Amazing"
        />
        Ski Slope
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={DomeHouses}
          alt="Category-Amazing"
        />
        Dome Houses
      </div>
      <div className="categories__secondary">
        <img
          className="categories__image"
          src={TreeHouses}
          alt="Category-Amazing"
        />
        Tree Houses
      </div>
    </main>
  );
};

export default Categories;
