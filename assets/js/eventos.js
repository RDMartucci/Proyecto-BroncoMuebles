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

//Boton buscar
document.getElementById('icono-busqueda').addEventListener('click',function(){
    document.querySelector('.form-buscar').classList.toggle('form-buscar-activo');
    console.log('Se presiono el icono de busqueda');
});