import React from 'react'
import './App.css';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  const props = {titulo: "Bienvenidos a RetroStore", subtitulo: "La mejor tienda de productos retro del pais"}

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer props= {props} />} />
          <Route path='/category/:categoryID' element={<ItemListContainer props={props} />} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;