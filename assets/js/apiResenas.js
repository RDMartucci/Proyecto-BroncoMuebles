// Tomo el elemento padre.
const padreComentarios = document.querySelector('#card-comentarios');

async function crearCards() {
  try {
    // URLs de las APIs
    const urlUsuarios = 'https://randomuser.me/api/?results=7';
    const urlComentarios = 'https://dummyjson.com/comments?limit=7';

    // Obtener datos de las APIs
    const [dataUsuarios, dataComentarios] = await Promise.all([
      obtenerDatos(urlUsuarios),
      obtenerDatos(urlComentarios)
    ]);

    // Extraer arrays de usuarios y comentarios
    const usuarios = dataUsuarios.results;
    const comentarios = dataComentarios.comments;

    // Renderizar las cards
    renderizarCards(usuarios, comentarios, padreComentarios);
  } catch (error) {
    console.error('Error al crear las cards:', error);
  }
}

// Función para renderizar las cards
function renderizarCards(usuarios, comentarios, contenedor) {
  if (!contenedor) {
    console.error('El contenedor no existe');
    return;
  }

  let cardsHTML = '';

  usuarios.forEach((usuario, index) => {
    const comentario = comentarios[index];
    cardsHTML += construirCard(usuario, comentario);
  });

  contenedor.innerHTML = cardsHTML;
}

// Función para obtener datos de una API
async function obtenerDatos(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener datos de la API: ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
}

// Función para construir una card
function construirCard(usuario, comentario) {
  return `
    <div class="card-comentario flex-column">
      <img class="card-comentario-img img-user" src="${usuario.picture.large}" alt="${usuario.name.first}">
      <div class="card-cuerpo justify-center">
        <p class="card-descripcion texto-comentario">${comentario.body}</p>
        <p class="texto-comentario">Estrellas: ${comentario.likes}</p>
      </div>
    </div>
  `;
}

// Llamar a la función principal
crearCards();
