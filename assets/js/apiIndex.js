
// Se ejecuta cuando termine de cargar la página.
document.addEventListener('DOMContentLoaded', () => {
    // Tomo el elemento padre.
    const divPadreDestacados = document.querySelector('#card-productos-destacados');
    const divPadreOfertas = document.querySelector('#card-productos-ofertas');
  
    const urlProductos = 'https://dummyjson.com/products?limit=15';
    const urlProductosOfertas = 'https://dummyjson.com/products?limit=10&skip=15';
  
    // Creo la función para obtener datos de la API usando async/await.
    // Card Productos Destacados.
    async function fetchProductos(endpoint, objPadre) {
      try {
        const response = await fetch(endpoint);
  
        // Verifico si la respuesta es exitosa.
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
        const productos = data.products;
        // Limpia el contenedor.
        objPadre.innerHTML = '';
  
        // Recorro el array por cada producto que tenga para crear una card por cada uno de ellos.
        productos.forEach((producto) => {
          const divCard = document.createElement('div');
          divCard.className = 'card-item flex-colum';
          divCard.innerHTML = `
            <img class="card-item-img"
                src="${producto.thumbnail}" alt="${producto.title}">
            <div class="card-cuerpo">
                <h3 class="card-art-nombre centrado-lineal">${producto.title}</h3>
                <p class="card-descripcion">${producto.description}.</p>
                <h3 class="card-item-precio centrado-lineal">Precio: ${producto.price}</h3>
                <button class="link-agregar-carrito flex-row centrado-lineal">
                    <span class="texto-link-carrito">agregar al carrito</span>
                </button>
                <i class='fa fa-cart-plus'style='font-size:48px;color:green'></i>
            </div>
          `;
          // Toma el botón del div creado para poder agregarle un evento.
          const btnAgregar = divCard.querySelector('button');
          btnAgregar.addEventListener('click', () => agregarAlCarrito(producto));
          objPadre.appendChild(divCard);
        });
      } catch (error) {
        // Manejo de errores en caso de fallo.
        console.error('Error de conexión:', error.message);
      }
    }
  
    // Función para agregar el producto al carrito.
    function agregarAlCarrito(producto) {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      Swal.fire({
        title: 'Producto Agregado',
        text: 'Se ha agregado al carrito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    }
  
    // Carga inicial de productos.
    fetchProductos(urlProductos, divPadreDestacados);
    fetchProductos(urlProductosOfertas, divPadreOfertas);
  });
  