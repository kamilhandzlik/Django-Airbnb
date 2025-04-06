import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import PropertyList from "./components/properties/PropertyList";
import PropertyDetailPage from "./components/properties/PropertyDetailPage";
import LandlordPage from "./components/landlords/LandlordPage";
import MyResevations from "./components/myreservations/MyReservations";
import MyProperties from "./components/myproperties/MyProperties";
import Inbox from "./components/inbox/Inbox";
import ConversationPage from "./components/inbox/ConversationPage";
import { LoginModalProvider } from "./components/hooks/LoginModalContext.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/londlord-page" element={<LandlordPage />} />
        <Route path="/londlord-page/:id" element={<LandlordPage />} />
        <Route path="/my-reservations" element={<MyResevations />} />
        <Route path="/my-reservations/:id" element={<MyResevations />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/my-properties/:id" element={<MyProperties />} />
        {/* <Route path="" element={</>} /> */}
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/:id" element={<ConversationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
