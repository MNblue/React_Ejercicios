import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Saludar from './Components/Saludar'
import Contador from './Components/Contador'

function App() {
  const user = {
    nombre: "Miki",
    edad: 9,
    color: "gris",
  }

  return (
    <>
      <Saludar usuarioInfo={user} />
      <Contador />
    </>
  )
}

export default App
