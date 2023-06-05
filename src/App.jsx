import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import BotonCondicional from './components/BotonCondicional/BotonCondicional';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

import Tienda from './Tienda/tienda';
import Descargas from './components/Descargas/descargas';
//REACT ROUTER: Libreria de enrutamiento para React. Permite navegar entre componentes sin necesidad de recargar la pagina.
//Se instala: npm install react-router.dom
//Se importa desde nuestra App los siguientes componentes de la librería: BrowserRouter, Route, Routes.
//BrowserRouter: Envuelve todos los componentes de nuestra aplicación y habilita la navegación entre ellos.
//ROUTES: Define las rutas de navegación.
//ROUTE: Define una ruta en específico. Importante: Se tiene que completar la prop "path" con la ruta a vincular. Y en la prop element pasamos el componente que se debe renderizar cuando haces click. 

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/descargas" element={<Descargas />} />
      </Routes>

      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer />
      <BotonCondicional />
    </BrowserRouter>
  );
}


export default App;


