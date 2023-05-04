import Producto from "../Producto/Producto"

//Las "props" son objetos que los componentes padres les pasan a los hijos con información importantes para ser renderizada.
//Se pasan como parametros den una función.
//Esto favorece a la reutilización de componentes.




const ContenedorProductos = () => {
    const props = {
        nombre: "Pelotas",
        precio: 3500
    };
  return (
    <div>
        <Producto nombre="Colchonetas" precio={2500} />
        <Producto nombre="Pesas" precio={4000} />
        <Producto {...props} />
    </div>
  )
}

export default ContenedorProductos