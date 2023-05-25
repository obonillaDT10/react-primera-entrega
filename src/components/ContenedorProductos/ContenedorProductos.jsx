import Producto from "../Producto/Producto"

//Las "props" son objetos que los componentes padres les pasan a los hijos con información importantes para ser renderizada.
//Se pasan como parametros den una función.
//Esto favorece a la reutilización de componentes.




const ContenedorProductos = () => {
    const props = {
        nombre: "Juego",
        precio: 3500
    };
  return (
    <div>
        <Producto nombre="Juego1" precio={1800} />
        <Producto nombre="Juego2" precio={2500} />
        <Producto nombre="Juego3" precio={4000} />
        <Producto {...props} />
    </div>
  )
}

export default ContenedorProductos