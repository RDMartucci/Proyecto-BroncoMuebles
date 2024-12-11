//estructura a crear.
/*   
<div class="card-item flex-column">
    <img class="card-item-img" src="https://via.assets.so/furniture.png?id=1&q=95&w=250&h=250&fit=fill" alt="mueble">
    <div class="card-cuerpo">
        <h3 class="card-art-nombre centrado-lineal">Sillón individual Clase A</h3>
        <p class="card-descripcion">Sillón individual Clase A, con un diseño elegante y sofisticado, ideal para cualquier habitación de la casa.</p>
        <h3 class="card-item-precio centrado-lineal">$1.450.000</h3>
        <a href="#" class="link-agregar-carrito flex-column centrado-lineal">
            <span class="texto-link-carrito">agregar al carrito</span>
        </a>
    </div>
</div>
*/
//tomo el elemento padre.
const divPadre = document.querySelector('.card-contenido');

//creo la función para obtener datos de la API.
function fetchProductos(){
    fetch('https://dummyjson.com/products?limit=12')
    .then(response => response.json()) // trae los encabezados y los datos juntos.
    .then((data)=>{ //aca separa los datos unicamente.
        const productos = data.products;
        console.log(data.products);

        //Limpia el contenedor
        divPadre.innerHTML='';

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
            divPadre.appendChild(divCard);
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