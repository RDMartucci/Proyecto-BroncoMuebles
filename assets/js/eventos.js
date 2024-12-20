// const divCarrito = document.getElementByClassName('div-carrito');
const divCarrito = document.querySelector('.div-carrito');
const urlOrigen = window.location.pathname;
let destino = '';

if (urlOrigen.includes('index')) {
    destino = "./pages/carritoMME.html";
} else {
    destino = "./carritoMME.html";
}

console.log('url:' , destino);

divCarrito.addEventListener('click', ()=>{
    window.location.href = destino;
    
})

// if(!btnMenos){
//     console.log('Boton menos no existe en el eventos.js');
// } else {
//     btnMenos.addEventListener('click', () => {
//         if (item.quantity > 1) {
//             item.quantity -= 1;
//             renderizarCarrito();
//             localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
//         }
//     });
// }

// btnMas.addEventListener('click', () => {
//     item.quantity += 1;
//     renderizarCarrito();
//     localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
// });
// btnEliminar.addEventListener('click', () => {
//     carritoItemsStorage.splice(index, 1);
//     renderizarCarrito();
//     localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
// });
