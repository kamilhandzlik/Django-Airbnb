import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Django Bnb</h1>
      <h2 className="dark-red-text">React and Vite are working!</h2>
    </>
  )
}

export default App
