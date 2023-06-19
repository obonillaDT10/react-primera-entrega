// import { useState, useEffect } from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail';
// import { useParams } from 'react-router-dom';

// //Importamos las nuevas funciones: 
// import {getDoc, doc} from "firebase/firestore";
// import { db } from '../../service/config';

// const ItemDetailContainer = () => {
//     const [producto, setProducto] = useState(null);

//     const { idItem } = useParams();

//     useEffect( () => {
//         const nuevoDoc = doc(db, "ecommerce", idItem);

//         getDoc(nuevoDoc)
//             .then(res => {
//                 const data = res.data();
//                 const nuevoProducto = {id: res.id, ...data}
//                 setProducto(nuevoProducto);
//             })
//             .catch(error => console.log(error))
//     }, [idItem])


//     return (
//         <div>
//             <ItemDetail {...producto} />
//         </div>
//     )
// }

// export default ItemDetailContainer

//PRUEBAS
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import {getDoc, doc} from "firebase/firestore";
import {db} from "../../service/config"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { idItem } = useParams();

    useEffect( () => {
       const nuevoDoc = doc(db, "productos", idItem);

       getDoc(nuevoDoc)
          .then(res => {
            const data = res.data();
            const nuevoProducto = {id: res.id, ...data};
            console.log(data)
            setProducto(nuevoProducto);
        })
          .catch(err => {
            console.log(err)
          })

    }, [idItem])

   
    // useEffect(() => {
    //     getUnProducto(idItem)
    //         .then(res => setProducto(res))
    // }, [idItem])

    // console.log(producto)

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer