import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import PropertyList from "./components/properties/PropertyList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
      <div>
        <PropertyList />
      </div>
    </Router>
  );
}

export default App;
