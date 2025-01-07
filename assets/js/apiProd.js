// Tomo el elemento padre.
const divPadreDestacados = document.querySelector("#card-productos-destacados");
// Paginación.
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfo = document.getElementById("page-info");

/* Estas variables se utilizan para ver la página actual, la cantidad de elementos a mostrar 
y el total de elementos. */
let currentPage = 1;
const limit = 20;
let totalProductos = 0;

// Creo la función para obtener datos de la API.
async function fetchProductos(page) {
  // Calcula el número de elementos a omitir.
  const skip = (page - 1) * limit;

  try {
    // Realiza la solicitud a la API.
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

    // Verifica si la respuesta fue exitosa.
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    // Procesa los datos.
    const data = await response.json();
    const productos = data.products;
    totalProductos = data.total; // Total de productos para la paginación.

    // Limpia el contenedor.
    divPadreDestacados.innerHTML = "";

    // Crea una card por cada producto.
    productos.forEach((product) => {
      const divCard = document.createElement("div");
      divCard.className = "card-item flex-colum";

      divCard.innerHTML = `
        <img class="card-item-img" src="${product.thumbnail}" alt="${product.title}">
        <div class="card-cuerpo">
          <h3 class="card-art-nombre centrado-lineal">${product.title}</h3>
          <p class="card-descripcion">${product.description}.</p>
          <h3 class="card-item-precio centrado-lineal">Precio: ${product.price}</h3>
          <button class="link-agregar-carrito flex-column centrado-linea">
            <span class="texto-link-carrito">agregar al carrito</span>
          </button>
        </div>
      `;

      // Añade evento al botón "Agregar al carrito".
      const btnAgregar = divCard.querySelector("button");
      btnAgregar.addEventListener("click", () => agregarAlCarrito(product));

      divPadreDestacados.appendChild(divCard);
    });

    // Actualiza la información de paginación.
    pageInfo.textContent = `Página: ${currentPage}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * limit >= totalProductos;

  } catch (error) {
    // Manejo de errores en caso de fallo.
    console.error("Error al cargar los productos:", error.message);
  }
}

// Función para agregar el producto al carrito.
function agregarAlCarrito(product) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(product);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  Swal.fire({
    title: "Producto Agregado",
    text: `${product.title} -> Se ha agregado el producto al carrito`,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
}

// Eventos de paginación.
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProductos(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage * limit < totalProductos) {
    currentPage++;
    fetchProductos(currentPage);
  }
});

// Carga inicial de productos.
fetchProductos(currentPage);
