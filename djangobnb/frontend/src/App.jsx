import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import PropertyList from "./components/properties/PropertyList";
import PropertyDetailPage from "./components/properties/PropertyDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
