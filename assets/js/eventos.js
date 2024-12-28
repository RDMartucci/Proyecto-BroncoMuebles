//Redirige al carrito segun página activa.
const divCarrito = document.querySelector('.div-carrito');
const urlOrigen = window.location.pathname;
let destino = '';

if (urlOrigen.includes('index')) {
    destino = "./pages/carritoMME.html";
} else {
    destino = "./carritoMME.html";
}

divCarrito.addEventListener('click', ()=> window.location.href = destino)

// if(btnMenos){
//     btnMenos.addEventListener('click', () => {
//         if (item.quantity > 1) {
//             item.quantity -= 1;
//             renderizarCarrito();
//             localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
//         }
//     })
// } else {

// }