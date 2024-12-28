document.addEventListener("DOMContentLoaded", () => {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoTableBody = document.getElementById('carrito-items');
    const totalgeneral = document.getElementById('total');
    let total = 0;

     // Función para actualizar el total del carrito
    const actualizarTotal = () => {
        total = carritoItemsStorage.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        totalgeneral.textContent = `$ ${total.toFixed(2)}`;
    };

    // Función para renderizar el carrito
    const renderizarCarrito = () => {
        carritoTableBody.innerHTML = ''; // Limpiar tabla antes de renderizar
        carritoItemsStorage.forEach((item, index) => {
            const row = document.createElement('tr');

            // Nombre del producto
            const nombreProducto = document.createElement('td');
            nombreProducto.textContent = item.title;
            row.appendChild(nombreProducto);

            // Precio del producto
            const precioProducto = document.createElement('td');
            precioProducto.textContent = `$${item.price}`;
            row.appendChild(precioProducto);

            // Cantidad
            const cantidadProducto = document.createElement('td');
            const cantidadContainer = document.createElement('div');
            cantidadContainer.className = "cantidad-container";

            let btnMenos = document.createElement('button');
            btnMenos.className = "btn-menos";
            btnMenos.textContent = '-';
            btnMenos.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    renderizarCarrito();
                    localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
                }
            });
            const spanCantidad = document.createElement('span');
            spanCantidad.textContent = item.quantity;

            let btnMas = document.createElement('button');
            btnMas.className = "btn-mas";
            btnMas.textContent = '+';
            btnMas.addEventListener('click', () => {
                item.quantity += 1;
                renderizarCarrito();
                localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
            });

            cantidadContainer.appendChild(btnMenos);
            cantidadContainer.appendChild(spanCantidad);
            cantidadContainer.appendChild(btnMas);
            cantidadProducto.appendChild(cantidadContainer);
            row.appendChild(cantidadProducto);

            // Subtotal
            const subtotal = item.price * item.quantity;
            const tdSubtotalProducto = document.createElement('td');
            // Aca iria un div encerrando el subtotal y el btn eliminar para display flex.
            const subtotalContainer = document.createElement('div');
            subtotalContainer.className='subtotal-container flex-row justify-spBetween';
            const spanSubtotal = document.createElement('span');
            spanSubtotal.textContent = `$${subtotal}`;
            
            // Botón eliminar
            let btnEliminar = document.createElement('button');
            btnEliminar.className = "btn-eliminar";
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => {
                carritoItemsStorage.splice(index, 1);
                renderizarCarrito();
                localStorage.setItem('carrito', JSON.stringify(carritoItemsStorage));
                Swal.fire({
                    title: 'Producto ELiminado',
                    text: 'Se ha eliminado el producto del carrito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            });
            subtotalContainer.appendChild(spanSubtotal);
            subtotalContainer.appendChild(btnEliminar);

            tdSubtotalProducto.appendChild(subtotalContainer);
            row.appendChild(tdSubtotalProducto);

            // Agregar fila a la tabla
            carritoTableBody.appendChild(row);
        });

        // Actualizar el total
        actualizarTotal();
    };

    if (carritoItemsStorage == "") {
        console.log('Carrito sin items. (vacío)');
    // Mostrar el total redondeado a 2 decimales.
        totalgeneral.textContent = 'Sin items en el carrito.';
    } else {
        // Inicializar la propiedad "quantity" si no existe
        carritoItemsStorage.forEach(item => {
            if (!item.quantity) {
                item.quantity = 1; // Establecer cantidad inicial en 1
    console.log('cantidad a 1. quantity=1');
            }
        });

    }

    // Inicializar carrito
    renderizarCarrito();

    // Botón para limpiar el carrito y volver al inicio
    document.getElementById('limpiar-carrito').addEventListener('click', () => {
        localStorage.removeItem('carrito');
        window.location.href = '../index.html';
    });

    //Boton de continuar con la compra:
    document.getElementById('continuar-compra').addEventListener('click', () => {
        window.location.href = './productos.html';
    });

    // Botón para finalizar la compra
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        Swal.fire({
            title: 'Compra FInalizada',
            text: 'Gracias por confiar en nosotros. Redirigiendo al sitio BroncoMueble',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el carrito después de finalizar la compra
        localStorage.removeItem('carrito');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 4000);
    });
});