
const footer = document.querySelector('footer');

const miFooter = `
<div class="div-footer-top flex-column">
            <section class="newsletter">
                <div class="news-box">
                    <h2 class="news-textoh2 centrado-lineal">Suscribete a nuestro newsletter</h2>
                    <h3 class="news-textoh3 centrado-lineal">Registrate y recibí nuestras ofertas.</h3>
                </div>
                <form action="#" class="flex-row form-newsletter centrado-lineal" id="form-newsletter">
                    <input type="text" name="correo-newsletter" id="input-correo">
                    <a href="#" class="link-agregar-carrito link-newsletter" id="link-enviar">
                        <span class="mayuscula">enviar</span>
                    </a>
                </form>
            </section>
            <div class="sociales flex-row justify-around">
                <span class="sociales-item">
                    <a href="https://www.facebook.com/" class="sociales-link texto-link-carrito">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </span>
                <span class="sociales-item">
                    <a href="https://www.instagram.com/" class="sociales-link texto-link-carrito">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </span>
                <span class="sociales-item">
                    <a href="" class="sociales-link texto-link-carrito">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a></span>
                <span class="sociales-item">
                    <a href="https://x.com/?lang=es" class="sociales-link texto-link-carrito">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a></span>
            </div>
        </div>
        <div class="footer-base flex-column justify-around">
            <div class="footer-base-item centrado-lineal">
                <h2 class="tituloh2 mayuscula fondoOscuro centrado-lineal">BroncoMuebles</h2>
                <div class="linea-subrayado justify-center"></div>
                <ul class="flex-column ul-listado">
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Quienes somos</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Trabaja con nosotros</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Políticas de privacidad</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Términos y condiciones</a>
                    </li>
                </ul>
            </div>
            <div class="footer-base-item centrado-lineal">
                <h2 class="tituloh2 mayuscula fondoOscuro centrado-lineal">ayuda</h2>
                <div class="linea-subrayado justify-center"></div>
                <ul class="flex-column ul-listado">
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Cómo comprar</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Medios de pago</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Cambios</a>
                    </li> 
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">Envíos y entrega</a>
                    </li>
                </ul>
            </div>
            <div class="footer-base-item centrado-lineal">
                <h2 class="tituloh2 mayuscula fondoOscuro centrado-lineal">categorías</h2>
                <div class="linea-subrayado justify-center"></div>
                <ul class="flex-column ul-listado">
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">living</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">comedor</a>
                    </li>
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">cocina</a>
                    </li>         
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">dormitorio</a>
                    </li>      
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">oficina</a>
                    </li>          
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">jardin</a>
                    </li>            
                    <li class="item-menu-footer">
                        <a href="#" class="link-menu-footer capital">otros</a>
                    </li>
                </ul>
            </div>
            <div class="footer-base-item centrado-lineal">
                <h2 class="tituloh2 mayuscula fondoOscuro centrado-lineal">contactanos</h2>
                <div class="linea-subrayado justify-center"></div>
                <div class="datos-nosotros">
                    <span class="span-contactanos">Av. Río Limay 12.</span>
                    <span class="span-contactanos">E3102QEY</span>
                    <span class="span-contactanos">San Vicente, Buenos Aires</span>
                    <span class="span-contactanos">0222 123 456</span>
                    <span class="span-contactanos">muebleria@broncomuebles.com.ar</span>
                </div>
            </div>
        </div>
        <section class="centrado-lineal sec-ubicacion">
            <article>
                <div class="div-ubicacion">
                    <iframe class="iframe-ubicacion"
                        title="ubicacion del negocio"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3267.845903968091!2d-58.436271270995654!3d-35.010562358904245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1727814643198!5m2!1ses!2sar"
                        width="600"
                        height="450"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </article>
        </section>

`;

footer.className="footer-contenedor flex-column justify-center";
footer.innerHTML = miFooter;
