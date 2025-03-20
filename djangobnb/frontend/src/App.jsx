import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <div className='pt-24'>
        <h1>Django Bnb</h1>
        <h2 className="dark-red-text">React and Vite are working!</h2>
      </div>
    </Router>
  )
}

export default App
