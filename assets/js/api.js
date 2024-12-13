//Se ejecuta cuando termine de cargar la página.
document.addEventListener('DOMContentLoaded', ()=>{
//tomo el elemento padre.
const divPadreDestacados = document.querySelector('#card-productos-destacados');
const divPadreOfertas = document.querySelector('#card-productos-ofertas');

//creo la función para obtener datos de la API.
//Card Productos Destacados.
function fetchProductos(){
    fetch('https://dummyjson.com/products?limit=15')
    .then(response => response.json()) // trae los encabezados y los datos juntos.
    .then((data)=>{ //aca separa los datos unicamente.
        const productos = data.products;
        console.log(data.products);

        //Limpia el contenedor
        divPadreDestacados.innerHTML='';

         //Recorro el array por cada producto que tenga para crear una card por cada uno de ellos.
        productos.forEach((product) => {
            const divCard = document.createElement('div');
            divCard.className="card-item flex-colum";
            divCard.innerHTML=`
            <img class="card-item-img"
                src="${product.thumbnail}" alt="${product.title}"">
            <div class="card-cuerpo">
                <h3 class="card-art-nombre centrado-lineal">${product.title}</h3>
                <p class="card-descripcion">${product.description}.</p>
                <h3 class="card-item-precio centrado-lineal">Precio: ${product.price}</h3>
                <button class="link-agregar-carrito flex-column centrado-linea">
                    <span class="texto-link-carrito">agregar al carrito
                    </spanr
                </button>
            </div>
            `;
            //Toma el botón del div creado para poder agregarle un evento.
            const btnAgregar = divCard.querySelector('button');
            btnAgregar.addEventListener("click",()=>
                agregarAlCarrito(product)
            )
            divPadreDestacados.appendChild(divCard);
        });
    })
    //Atrapo el error en caso de que alla.
    .catch((error)=>console.log('Error de conexión:', error));
}


//Card Productos Ofertas.
function fetchProductosOfertas(){
    fetch('https://dummyjson.com/products?limit=10&skip=15')
    .then(response => response.json()) // trae los encabezados y los datos juntos.
    .then((data)=>{ //aca separa los datos unicamente.
        const productos = data.products;
        console.log(data.products);

        //Limpia el contenedor
        divPadreOfertas.innerHTML='';

         //Recorro el array por cada producto que tenga para crear una card por cada uno de ellos.
        productos.forEach((product) => {
            const divCard = document.createElement('div');
            divCard.className="card-item flex-colum";
            divCard.innerHTML=`
            <img class="card-item-img"
                src="${product.thumbnail}" alt="${product.title}"">
            <div class="card-cuerpo">
                <h3 class="card-art-nombre centrado-lineal">${product.title}</h3>
                <p class="card-descripcion">${product.description}.</p>
                <h3 class="card-item-precio centrado-lineal">Precio: ${product.price}</h3>
                <button class="link-agregar-carrito flex-column centrado-linea">
                    <span class="texto-link-carrito">agregar al carrito
                    </spanr
                </button>
            </div>
            `;
            //Toma el botón del div creado para poder agregarle un evento.
            const btnAgregar = divCard.querySelector('button');
            btnAgregar.addEventListener("click",()=>
                agregarAlCarrito(product)
            )
            divPadreOfertas.appendChild(divCard);
        });
    })
    //Atrapo el error en caso de que alla.
    .catch((error)=>console.log('Error de conexión:', error));
}
 //Función para agregar el producto al carrito.
function agregarAlCarrito(product){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${product.title} se ha agregado al carrito!`);	
}

//Carga inicial de productos.
fetchProductos()
fetchProductosOfertas()

})