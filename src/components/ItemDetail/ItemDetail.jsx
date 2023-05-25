

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div style={{ marginLeft: '25px' }}>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sunt mollitia error fugit culpa nisi molestiae ullam possimus autem laudantium saepe natus cum enim vitae aspernatur, soluta eos necessitatibus quae.</p>
        <img src= {img} alt={nombre} />

    </div>
  )
}

export default ItemDetail