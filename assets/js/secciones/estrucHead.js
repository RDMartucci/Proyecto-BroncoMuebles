const headIndex = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/css/index.css">
<link href="./assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="./assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="./assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="./assets/img/logo05.ico">
`;

const headProductos = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/productos.css">
<link href="../assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="../assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="../assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="../assets/img/logo05.ico">
`;

const headComentarios = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/comentarios.css">
<link href="../assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="../assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="../assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="../assets/img/logo05.ico">
`;

const headContacto = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/form.css">
<link href="../assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="../assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="../assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="../assets/img/logo05.ico">
`;
//Toma el head de la pagina cargada.
const head = document.getElementsByTagName('head');
let headContenido = "";

//Obtengo la direccion URL y chequeo que contenga la palabra "index".

let url = window.location.pathname;

if (url.includes('index')) {
    headContenido = headIndex;
} else if (url.includes('product')) {
    headContenido = headProductos;
} else if (url.includes('contact')) {
    headContenido = headContacto;
} else if (url.includes('comentar')) {
    headContenido = headComentarios;
} else {
    headContenido = headIndex;
}
document.getElementById("head-auto").innerHTML = headContenido; // Reemplazar el contenido del <head>

console.log('luego del if...:',headContenido);
console.log('Path incluye:',url);

// Titulo del sitio: Genero elemento TITLE y le asigno el texto con el nombre del sitio.
const tituloSitio = document.createElement("title");
tituloSitio.textContent = "BroncoMuebles";

//Agrego el titulo creado a la etiqueta head.
document.head.appendChild(tituloSitio);
