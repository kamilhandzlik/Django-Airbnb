import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Categories from "./components/categories/Categories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Categories />
      </div>
    </Router>
  );
}

export default App;
