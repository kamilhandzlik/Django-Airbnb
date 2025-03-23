import React from "react";
import "./Categories.css";
import { Image } from "lucide-react";
import Amazing from "../../assets/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg";

const Categories = () => {
  return (
    <main className="categories">
      <div className="categories__secondary">
        <Image
          className="categories__image"
          src={Amazing}
          alt="Category-Amazing"
        />
      </div>
    </main>
  );
};

export default Categories;
