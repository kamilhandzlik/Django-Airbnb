import React from "react";
import "./ConversationPage.css";
import Navbar from "../navbar/Navbar";
import Categories from "../categories/Categories";
import ConversationDetail from "./ConversationDetail";

const ConversationPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <main className="conversation-page-container">
        <ConversationDetail />
      </main>
    </>
  );
};

export default ConversationPage;
