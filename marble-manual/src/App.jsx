import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PetData from './lib/data/Marble.json'

function App() {
  const [count, setCount] = useState(0)
  const [petData, setPetData] = useState(PetData)

  


  return (
    <div className="App">
     { console.log(petData)}
    </div>
  )
}

export default App
