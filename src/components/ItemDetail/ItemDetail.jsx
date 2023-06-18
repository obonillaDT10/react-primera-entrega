import './ItemDetail.css'
//importimport './ItemDetail.css' ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
//import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
//import { CarritoContext } from '../../context/CarritoContext'
//Importamos el useContext: 
//import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  console.log("holaaaa",nombre)

  //1) Creamos un estado con la cantidad de productos agregados. 
  //const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  //const { agregarProducto } = useContext(CarritoContext);

  //2)Creamos una función manejadora de la cantidad: 
  //const manejadorCantidad = (cantidad) => {
   //setAgregarCantidad(cantidad);
    //console.log("Productos Agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    //const item = { id, nombre, precio };
    //agregarProducto(item, cantidad);
  
console.log(id)
console.log(nombre)
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> {descripcion}</p>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica de montaje y desmontaje de componentes: 
      }
      {/* {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      } */}
    </div>
  )
}

export default ItemDetail

// const ItemDetail = ({id, nombre, precio, img}) => {
//   return (
//     <div style={{ marginLeft: '25px' }}>
//         <h2>Nombre: {nombre} </h2>
//         <h3>Precio: {precio} </h3>
//         <h3>ID: {id} </h3>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sunt mollitia error fugit culpa nisi molestiae ullam possimus autem laudantium saepe natus cum enim vitae aspernatur, soluta eos necessitatibus quae.</p>
//         <img src= {img} alt={nombre} />

//     </div>
//   )
// }

// export default ItemDetail