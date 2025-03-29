import React from "react";
import "./Inbox.css";
import Navbar from "../components/navbar/Navbar";
import Categories from "../components/categories/Categories";
import Conversation from "./Converstions";

const Inbox = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main>
        <Conversation />
        <Conversation />
        <Conversation />
      </main>
    </>
  );
};

export default Inbox;
