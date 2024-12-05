const headIndex = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/css/index.css">
<link href="./assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="./assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="./assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="./assets/img/logo05.ico">
`;

const headSitio = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/productos.css">
<link href="../assets/fontawesome/css/fontawesome.css" rel="stylesheet">
<link href="../assets/fontawesome/css/brands.css" rel="stylesheet">
<link href="../assets/fontawesome/css/solid.css" rel="stylesheet">
<link rel="icon" href="../assets/img/logo05.ico">
`;
//Toma el head de la pagina cargada.
const head = document.getElementsByTagName('head');
console.log('tomado el elemento head:',head)

let headContenido = "";

//Obtengo la direccion URL y chequeo que contenga la palabra "index".
if (window.location.pathname.includes("index")) {
    // Contenido del <head> según la página si es index u otra.
    headContenido = headIndex;
} else {
    headContenido = headSitio;
}
// Reemplazar el contenido del <head>
document.getElementById("head-auto").innerHTML = headContenido;


// genero elemento TITLE y le asigno el texto con el nombre del sitio.
const tituloSitio = document.createElement("title");
tituloSitio.textContent = "BroncoMuebles";

//Agrego el titulo creado a la etiqueta head.
document.head.appendChild(tituloSitio);
