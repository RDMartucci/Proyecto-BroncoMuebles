// Codigo sólo para el fragmento del formulario.

const article = document.querySelector('.art-contenedorForm');
console.log(article);
const formContacto = document.createElement('form');
formContacto.innerHTML = `
                <form action="https://formspree.io/f/mgebzqoj" method="POST" enctype="multipart/form-data"
                    id="form-contacto" class="justify-spBetween">
                    <div class="flex-column justify-center eti-contenedor">
                        <label for="nombre" class="flex-column ancho-total">
                            <span class="etiqueta">Nombre:</span>
                            <input type="text" placeholder="Escriba su nombre" id="nombre" name="nombre">
                        </label>
                    </div>
                    <div class="flex-column justify-center eti-contenedor">
                        <label for="email" class="flex-column ancho-total">
                            <span class="etiqueta">email:</span>
                            <input type="email" placeholder="Escriba el email" id="email" name="email"
                                minlength="5">
                        </label>
                    </div>
                    <div class="flex-column justify-center eti-contenedor">
                        <label for="telefono" class="flex-column ancho-total">
                            <span class="etiqueta">Teléfono de contacto</span>
                            <input type="number" placeholder="Teléfono para contactarte" id="telefono" name="telefono"
                                minlength="11">
                        </label>
                    </div>
                    <div class="flex-column justify-center eti-contenedor2">
                        <span class="etiqueta ancho-total izq-lineal">Preferencia de horarios para poder contactarte</span>
                            <div class="flex-row justify-spBetween">
                                <div class="form-item form-sub-item">
                                    <label for="manaña">
                                        <span class="etiqueta">Mañana</span>
                                        <input type="checkbox" name="manaña" id="manaña">
                                    </label>
                                </div>
                                <div class="form-item form-sub-item">
                                    <label for="tarde">
                                        <span class="etiqueta">Tarde</span>
                                        <input type="checkbox" name="tarde" id="tarde">
                                    </label>
                                </div>
                                <div class="form-item form-sub-item">
                                    <label for="noche">
                                        <span class="etiqueta">Noche</span>
                                        <input type="checkbox" name="noche" id="noche">
                                    </label>
                                </div>
                            </div>
                    </div>
                    <div class="form-item eti-contenedor2">
                        <label for="origen-contacto" class="flex-column ancho-total">
                            <span class="etiqueta">Nos conocio a traves de:</span>
                            <select name="origen-contacto" id="origen-contacto">
                                <option value="">seleccione</option>
                                <option value="1">recomendación de amigo y/o conocido</option>
                                <option value="2">red social</option>
                                <option value="3">promoción</option>
                                <option value="4">otro</option>
                            </select>
                        </label>
                    </div>
                    <div class="form-item eti-contenedor3">
                        <label for="comentario" class="flex-column ancho-total"><span class="etiqueta">Comentario</span>
                            <textarea name="comentario" id="comentario" rows="4" cols="20"></textarea>
                        </label>
                    </div>
                    <button type="submit" class="link-agregar-carrito" id="boton-confirmar" >Confirmar</button>

                </form>
                `;
article.appendChild(formContacto);
console.log(article);


