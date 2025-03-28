import React from "react";
import "./Inbox.css";
import Navbar from "../components/navbar/Navbar";
import Categories from "../components/categories/Categories";

const Inbox = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main>
        <h1>Inbox</h1>
      </main>
    </>
  );
};

export default Inbox;
