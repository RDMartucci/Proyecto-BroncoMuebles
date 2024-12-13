const divCarrito = document.getElementsByClassName('div-carrito')[0];
const urlOrigen = window.location.pathname;
let destino = '';

if (urlOrigen.includes('index')) {
    destino = "./pages/carrito.html";
} else {
    destino = "./carrito.html";
}

divCarrito.addEventListener('click', ()=>{
    window.location.href = destino;
    
})