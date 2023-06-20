import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

 
import { CarritoContext } from '../../context/CarritoContext'

import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  
   const [agregarCantidad, setAgregarCantidad] = useState(0);

   
  const { agregarProducto } = useContext(CarritoContext);
  console.log("funcion agregarProducto", agregarProducto)

  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
   

   
    const item = { id, nombre, precio };
    console.log("hola soy el item", item)
    console.log(cantidad)
   agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <h3>ID: {id} </h3>
      <p>Stock: {stock}</p>
      <img src={img} alt={nombre} />
      
      {
         
      }
      {
        agregarCantidad > 0 ? (<Link to="/cart" className='miBtn'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail
