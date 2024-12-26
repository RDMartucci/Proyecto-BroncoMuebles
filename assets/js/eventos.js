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