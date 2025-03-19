import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Django Bnb</h1>
      <h2 className="dark-red-text">React and Vite are working!</h2>
    </>
  )
}

export default App
