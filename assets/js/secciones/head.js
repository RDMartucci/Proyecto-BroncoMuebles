//Contenido generico del HEAD.
const metas = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
const estilosFontawesome = '<link href="./assets/fontawesome/css/fontawesome.css" rel="stylesheet"><link href="./assets/fontawesome/css/brands.css" rel="stylesheet"><link href="./assets/fontawesome/css/solid.css" rel="stylesheet"></link>';
const linksHead = '<link rel="icon" href="./assets/img/logo05.ico">';
//Estilos segun pagina.
const estilosPropios = '';
const estilosIndex = '<link rel="stylesheet" href="./assets/css/index.css">';
const estilosComentario = '<link rel="stylesheet" href="../assets/css/comentarios.css">';
const estilosProductos = '<link rel="stylesheet" href="../assets/css/productos.css">';
const estilosContacto = '<link rel="stylesheet" href="../assets/css/form.css">';

//Estructura basica HEAD.
const estrucHead = `
${metas}
${estilosFontawesome}
${linksHead}`;

//Toma el head de la pagina cargada.
const head = document.getElementsByTagName('head');
let headContenido = "";

//Obtengo la direccion URL.
let url = window.location.pathname;

if (url.includes('index')) { //Armo el HEAD segun la página cargada.
    const headIndex = `
        ${estrucHead}
        ${estilosIndex}
    `;
    headContenido = headIndex;
} else if (url.includes('product')) {
    const headProductos = `
        ${estrucHead}
        ${estilosProductos}
    `;
    headContenido = headProductos;
} else if (url.includes('contact')) {
    const headContacto = `
        ${estrucHead}
        ${estilosContacto}
    `;
    headContenido = headContacto;
} else if (url.includes('comentar')) {
    const headComentarios = `
        ${estrucHead}
        ${estilosComentario}
    `;
    headContenido = headComentarios;
} else {
    headContenido = headIndex;
}
document.getElementById("head-auto").innerHTML = headContenido; // Reemplazar el contenido del <head>

console.log('luego del if...:', headContenido);
console.log('Path incluye:', url);

// Titulo del sitio: Genero elemento TITLE y le asigno el texto con el nombre del sitio.
const tituloSitio = document.createElement("title");
tituloSitio.textContent = "BroncoMuebles";

//Agrego el titulo creado a la etiqueta head.
document.head.appendChild(tituloSitio);
