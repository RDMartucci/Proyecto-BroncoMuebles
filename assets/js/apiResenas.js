// Tomo el elemento padre.
const divPadreComentarios = document.querySelector('#card-comentarios');
console.log(divPadreComentarios);

if (!divPadreComentarios) {
    console.error("El contenedor 'card-comentarios' no se encuentra en el DOM.");
}

// URL de la API
const urlUsers = 'https://randomuser.me/api/?results=10';
console.log(urlUsers);

// Función API
async function fetchUsers(urlUsers) {
    try {
console.log('Entrando al fetch...');

        const response = await fetch(urlUsers);
console.log(response);

        if (!response.ok) {
            throw new Error(`Error en la petición HTTP: ${response.status} -> ${response.statusText}`);
        }

        const data = await response.json();
        const usuarios = data.results;
console.log(usuarios);

        // Limpia el contenedor.
        divPadreComentarios.innerHTML = '';
console.log('Contenedor limpiado');

        // Crea un elemento para cada usuario.
        usuarios.forEach(usuario => {
            const divCardUsuario = document.createElement('div');
console.log('Crea elemento div - divCardUsuario');

            divCardUsuario.classList.add('card-comentario', 'flex-column');
console.log(`Asigna clases al div: ${divCardUsuario.classList.length}`);

            // Construye el HTML para cada usuario.
            divCardUsuario.innerHTML = `
                <img class="card-comentario-img img-user" src="${usuario.picture.large}" alt="${usuario.name.first}">
                <h3 class="card-coment-nombre centrado-lineal">${usuario.name.first} ${usuario.name.last}</h3>
            `;
console.log(`divCardUsuario: ${divCardUsuario}`);

            divPadreComentarios.appendChild(divCardUsuario);
        });
    } catch (error) {
        console.error('Error de conexión:', error.message);
    }
}

// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers(urlUsers);
});

