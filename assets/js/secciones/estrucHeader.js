const headerIndex = `
        <div class="logo-contenedor">
            <a href="./index.html" id="logo-link">
                <img src="./assets/img/broncomuebles-logo.png" alt="logo" id="logo-img">
            </a>
        </div>
        <div class="menu-hamburguesa">
            <!-- Checkbox oculto -->
            <input type="checkbox" id="menu-toggle">
            <!-- Icono de hamburguesa -->
            <label class="menu-hamburguesa-icon" for="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <ul class="ul-menu menu-top capital" id="menu-header-top">
                <li class="menu-item ancho-total">
                    <a href="./pages/productos.html" class="link-menu d-block ancho-total">Productos</a>
                </li>
                <li class="menu-item ancho-total">
                    <a href="./pages/comentarios.html" class="link-menu d-block ancho-total">Reseñas</a>
                </li>
                <li class="menu-item ancho-total">
                    <a href="./pages/contacto.html" class="link-menu d-block ancho-total">Contacto</a>
                </li>
            </ul>
            <nav class="nav-header-base" id="nav-menu-principal">
                <ul class="ul-menu menu-base capital" id="menu-header-base">
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">living</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">comedor</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">cocina</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">dormitorio</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">oficina</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">jardín</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">otros</a>
                    </li>
                </ul>
            </nav>
            <i class="fas fa-search" id="icono-busqueda"></i>
            <form action="#" class="form-buscar" id="form-busqueda">
                <input type="text" name="busqueda" id="input-busqueda">
                <a href="#" id="link-buscar">
                    <i class="fas fa-search"></i>
                </a>
            </form>
            <div class="div-login">
                <i class="fa-solid fa-users-line" id="icono-login"></i>
                <ul class="menu-login">
                    <li><a href="#" class="link-menu-login">Iniciar Sesión</a></li>
                    <li><a href="#" class="link-menu-login">Registrarse</a></li>
                </ul>
                <div class="div-carrito link-menu-login">
                    <span>
                        <i class="fa-solid fa-shopping-cart"></i>
                    </span>
                </div>
            </div>
        </div>
`;

const headerPag = `
        <div class="logo-contenedor">
            <a href="../index.html" id="logo-link">
                <img src="../assets/img/broncomuebles-logo.png" alt="logo" id="logo-img">
            </a>
        </div>
        <div class="menu-hamburguesa">
            <!-- Checkbox oculto -->
            <input type="checkbox" id="menu-toggle">
            <!-- Icono de hamburguesa -->
            <label class="menu-hamburguesa-icon" for="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <ul class="ul-menu menu-top capital" id="menu-header-top">
                <li class="menu-item ancho-total">
                    <a href="./productos.html" class="link-menu d-block ancho-total">Productos</a>
                </li>
                <li class="menu-item ancho-total">
                    <a href="./comentarios.html" class="link-menu d-block ancho-total">Reseñas</a>
                </li>
                <li class="menu-item ancho-total">
                    <a href="./contacto.html" class="link-menu d-block ancho-total">Contacto</a>
                </li>
            </ul>
            <nav class="nav-header-base" id="nav-menu-principal">
                <ul class="ul-menu menu-base capital" id="menu-header-base">
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">living</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">comedor</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">cocina</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">dormitorio</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">oficina</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">jardín</a>
                    </li>
                    <li class="menu-item ancho-total">
                        <a href="#" class="link-menu d-block ancho-total">otros</a>
                    </li>
                </ul>
            </nav>
            <i class="fas fa-search" id="icono-busqueda"></i>
            <form action="#" class="form-buscar" id="form-busqueda">
                <input type="text" name="busqueda" id="input-busqueda">
                <a href="#" id="link-buscar">
                    <i class="fas fa-search"></i>
                </a>
            </form>
            <div class="div-login">
                <i class="fa-solid fa-users-line" id="icono-login"></i>
                <ul class="menu-login">
                    <li><a href="#" class="link-menu-login">Iniciar Sesión</a></li>
                    <li><a href="#" class="link-menu-login">Registrarse</a></li>
                </ul>
                <div class="div-carrito link-menu-login">
                    <span>
                        <i class="fa-solid fa-shopping-cart"></i>
                    </span>
                </div>
            </div>
        </div>
`;

let headerContenido = "";

//Obtengo la direccion URL y chequeo que contenga la palabra "index".
let url2 = window.location.pathname;

if (url2.includes('index')) {
    headerContenido = headerIndex;
} else {
    headerContenido = headerPag;
}
document.querySelector('header').innerHTML = headerContenido;// Reemplazar el contenido del <header>

