import React from 'react'

const Producto = (props) => {
  return (
    <div>
        <h2>JUEGO DESTACADO</h2>
        <p>Nombre: {props.nombre} </p>
        <p>Precio: {props.precio} </p>
        <button>Agregar al carrito</button>




    </div>
  )
}

export default Producto