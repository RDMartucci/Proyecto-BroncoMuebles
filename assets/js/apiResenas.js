// Tomo el elemento padre.
const divPadreComentarios = document.querySelector('#card-comentarios');

//URL de la API
const urlUsers = 'https://dummyjson.com/users?limit=15';
const urlComentarios = 'https://dummyjson.com/comments?limit=15';

// función API
async function fetchUrl(endpoint,objPadre) {
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw new Error(`Error en la petición HTTP: ${response.status} -> ${response.statusText}`);
        }
        
        const data = await response.json();
        const usuario = data.user;
        const comentarios = data.comments;

        // Limpia el contenedor.
        objPadre.innerHTML = '';

        

    }


}