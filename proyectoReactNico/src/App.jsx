import { useState } from 'react'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ItemListContainer saludo='Bienvenido a mi E-Commerce'/>
    </>
  )
}

export default App
