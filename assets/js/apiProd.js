//Se ejecuta cuando termine de cargar la página.
document.addEventListener("DOMContentLoaded", () => {
    //tomo el elemento padre.
    const divPadreDestacados = document.querySelector("#card-productos-destacados");
    //Paginación. -Copiada del profe.
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageInfo = document.getElementById("page-info");

    /* Estas variables se utilizan para ver la pagina actual, la cantidad de elementos a mostrar 
    y el total de elementos.*/
    //Paginación. -Copiada del profe.
    let currentPage = 1;
    const limit = 20;
    let totalProductos = 0;

    //creo la función para obtener datos de la API.
    //Card Productos Destacados.
    function fetchProductos(page) {
        //esta variable se usa para saber los elemtos que ya mostre y los que tienen que mostrar, o sea a partir del 2 en adelante
        //Paginación. -Copiada del profe.
        const skip = (page - 1) * limit;

        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((response) => response.json()) // trae los encabezados y los datos juntos.
        .then((data) => {
            //aca separa los datos unicamente.
            const productos = data.products;
            totalProductos = data.total; //Paginación. -Copiada del profe.
            //Limpia el contenedor
            divPadreDestacados.innerHTML = "";

            //Recorro el array por cada producto que tenga para crear una card por cada uno de ellos.
            productos.forEach((product) => {
            const divCard = document.createElement("div");
            divCard.className = "card-item flex-colum";

            divCard.innerHTML = `
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
          const btnAgregar = divCard.querySelector("button");
          btnAgregar.addEventListener("click", () => agregarAlCarrito(product));
          divPadreDestacados.appendChild(divCard);
        });
        // Paginación. -Copiada del profe.
        pageInfo.textContent = `Página: ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage * limit >= totalProductos;
      })
      //Atrapo el error en caso de que alla.
      .catch((error) => console.log("Error de conexión:", error));
  }

  //Función para agregar el producto al carrito.
  function agregarAlCarrito(product) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${product.title} se ha agregado al carrito!`);
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchProductos(currentPage);
    }
  });

  //Paginación. Copiada del Profe.
  nextBtn.addEventListener("click", () => {
    if (currentPage * limit < totalProductos) {
      currentPage++;
      fetchProductos(currentPage);
    }
  });

  //Carga inicial de productos.
  fetchProductos(currentPage);
});
