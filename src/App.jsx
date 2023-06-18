import './App.css';

//import { Contexto } from './Context/context';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';
//import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import BotonCondicional from './components/BotonCondicional/BotonCondicional';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Tienda from './Tienda/tienda';
// import Descargas from './components/Descargas/descargas';




function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer /> } />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
       
      </Routes>

      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer /> */}
      <BotonCondicional />
    </BrowserRouter>
  );
}



export default App;

