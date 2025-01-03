//Variables para los elementos del HEAD.
// href a fontAwesome.
let hrefFontAwesome = './assets/fontawesome/css';
const agregaPto = false;

//href a css propios.
let hrefCss = './assets/css';

//Contenido generico del HEAD.
const metas = `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;
const hrefIcono = `<link rel="icon" href="./assets/img/logo05.ico">`;
//Estilos segun pagina.
// const estilosPropios = '';
const estilosIndex = `<link rel="stylesheet" href="${hrefCss}/index.css">`;
const estilosComentario = `<link rel="stylesheet" href=".${hrefCss}/comentarios.css">`;
const estilosProductos = `<link rel="stylesheet" href=".${hrefCss}/productos.css">`;
const estilosContacto = `<link rel="stylesheet" href=".${hrefCss}/form.css">`;

console.log('---> Variables creadas para head:estilosFontawesome:',estilosFontawesome);
console.log('---> Variables creadas para head:estilosIndex:',estilosIndex);
console.log('---> Variables creadas para head:estilosComentario:',estilosComentario);
console.log('---> Variables creadas para head:estilosProductos:',estilosProductos);
console.log('---> Variables creadas para head:estilosContacto:',estilosContacto);

let estilosFontawesome = `<link href="${hrefFontAwesome}/fontawesome.css"  rel="stylesheet">
                            <link href="${hrefFontAwesome}/brands.css" rel="stylesheet">
                            <link href="${hrefFontAwesome}/solid.css" rel="stylesheet">`;

//Estructura basica HEAD.
const estrucHead = `
${metas}
${hrefIcono}`;

//Toma el head de la pagina cargada.
const head = document.getElementsByTagName('head');
let headContenido = "";

//Obtengo la direccion URL.
let url = window.location.pathname;

if (url.includes('index')) { //Armo el HEAD segun la página cargada.
    let estilosFontawesome = `<link href="${hrefFontAwesome}/fontawesome.css"  rel="stylesheet">
                            <link href="${hrefFontAwesome}/brands.css" rel="stylesheet">
                            <link href="${hrefFontAwesome}/solid.css" rel="stylesheet">`;
    const headIndex = `
        ${estrucHead}
        ${estilosFontawesome}
        ${estilosIndex}
    `;
    headContenido = headIndex;
} else {
    let estilosFontawesome = `<link href=".${hrefFontAwesome}/fontawesome.css"  rel="stylesheet">
                            <link href=".${hrefFontAwesome}/brands.css" rel="stylesheet">
                            <link href=".${hrefFontAwesome}/solid.css" rel="stylesheet">`;
} 
if (url.includes('product')) {
    const headProductos = `
        ${estrucHead}
        ${estilosFontawesome}
        ${estilosProductos}
    `;
    headContenido = headProductos;
} else if (url.includes('contact')) {
    const headContacto = `
        ${estrucHead}
        ${estilosFontawesome}
        ${estilosContacto}
    `;
    headContenido = headContacto;
} else if (url.includes('comentar')) {
    const headComentarios = `
        ${estrucHead}
        ${estilosFontawesome}
        ${estilosComentario}
    `;
    headContenido = headComentarios;
}
document.getElementById("head-auto").innerHTML = headContenido; // Reemplazar el contenido del <head>

console.log('luego del if...:', headContenido);
console.log('Path incluye:', url);

// Titulo del sitio: Genero elemento TITLE y le asigno el texto con el nombre del sitio.
const tituloSitio = document.createElement("title");
tituloSitio.textContent = "BroncoMuebles";

//Agrego el titulo creado a la etiqueta head.
document.head.appendChild(tituloSitio);
