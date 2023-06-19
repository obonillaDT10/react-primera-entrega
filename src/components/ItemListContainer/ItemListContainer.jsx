import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { collection,getDocs, query, where } from "firebase/firestore";  
import { db } from "../../service/config";


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState ([]);

  const { idCategoria } = useParams();


  useEffect( () => {
    console.log(idCategoria)
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")

    getDocs(misProductos)
    .then( res => {
        const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
           
            return {id: doc.id, ...data}
        }) 
  
        setProductos(nuevosProductos)
    })

    .catch(err => {
        console.log(err)
    })

}, [idCategoria])

return (
        <div>
        <h2 style={{ marginLeft: '25px' }}>{props.greeting}</h2>
        <ItemList productos={productos} />
      </div>
      )

}

 export default ItemListContainer


//PRUEBAS

// import { useState, useEffect } from 'react'
// import ItemList from '../ItemList/ItemList'
// import { getProductos, getProductosPorCategoria } from '../../asyncmock'
// import { useParams } from 'react-router-dom'

// const ItemListContainer = ({ greeting }) => {
//   const [productos, setProductos] = useState([]);

//   const { idCategoria } = useParams();

//   useEffect(() => {

//     const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

//     funcionProductos(idCategoria)
//       .then(res => setProductos(res))
//       .catch(error => console.error(error))
//   }, [idCategoria])

//   return (
//     <>
//       <h2> {greeting} </h2>
//       <ItemList productos={productos} />
//     </>
//   )
// }

// export default ItemListContainer