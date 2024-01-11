//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Customizer from "./pages/Customizer"
import CanvasModel from "./canvas"
import Home from "./pages/Home"

function App() {
  

  return (
    <main className="app transition-all ease-in">
     <Home/>
     <CanvasModel/>
     <Customizer/>
    </main>
  )
}

export default App
