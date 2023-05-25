const productos = [
    {nombre: "World of Warcraft: WOTLK", precio: 2500, id: 1, img: "../img/WrathLogo.webp"},
    {nombre: "League of Legends", precio: 2800, id: 2, img: "../img/lol.jpeg"},
    {nombre: "Diablo 4", precio: 2800, id: 3, img: "../img/diablo-iv-portada.jpg"},
    {nombre: "Counter Strike GO", precio: 3000, id: 4, img: "../img/csgofoto.png"},
    {nombre: "World of Warcraft: Dragonflight", precio: 3500, id: 5, img: "../img/dragonflight.jpeg"},
    {nombre: "Hearthstone", precio: 2000, id: 6, img: "../img/hearthstone.jpeg"},
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}

//Se crea una nueva función pero que esta vez retorne 1 solo producto:
//Se usa "Export" para qeu peuda ser utilizada en toda la aplicación.

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}



