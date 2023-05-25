import React from 'react'
//Importar una función de React que me ayuda a trabajar con el estado. En este caso seria el "useState"
import { useState } from 'react'

const ItemCount = () => {
    //Los hooks se trabajan en esta parte superior del componente:
    
  return (
    <div>
        <button> - </button>
        <p>10</p>
        <button> + </button>
    </div>
  )
}

export default ItemCount