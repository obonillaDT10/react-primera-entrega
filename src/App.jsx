import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer/>
      {
        //<ItemCount />
        //<Promesas />
        //<Fetch/>
      }
      


    </>

  );
}


export default App;


