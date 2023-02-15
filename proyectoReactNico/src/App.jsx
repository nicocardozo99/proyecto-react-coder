import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenido a mi E-Commerce'/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer saludo='Bienvenido a mi E-Commerce'/>}/>
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
        <ItemCount/>  
    </BrowserRouter>
  )
}

export default App
