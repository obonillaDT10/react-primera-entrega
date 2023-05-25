import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../asyncmock'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState ([]);

  useEffect( ()=> {
    getProductos()
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h2 style={{ marginLeft: '25px' }}>{props.greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer