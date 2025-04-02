import React from "react";
import "./Inbox.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
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
