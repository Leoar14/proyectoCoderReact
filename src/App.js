import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './components/Notification/NotificationService';
const App = () => {
  const props = {titulo: "Bienvenidos a Tucson's Deliberys", subtitulo: "La mejor tienda de productos retro del pais"}
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer props= {props} />} />
              <Route path='/category/:categoryID' element={<ItemListContainer props={props} />} />
              <Route path='/item/:itemID' element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;