document.addEventListener("DOMContentLoaded", () => {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoTableBody = document.getElementById('carrito-items');
    const totalgeneral = document.getElementById('total');
    let total = 0;

    if (carritoItemsStorage == "") {
        console.log('Carrito sin items. (vacío)');
    // Mostrar el total redondeado a 2 decimales.
        totalgeneral.textContent = `Sin items en el carrito. ${total.toFixed(2)}`;
    } else {
    // Cargar productos en la tabla del carrito
        carritoItemsStorage.forEach(item => {
        const row = document.createElement('tr');

        // Nombre del producto
        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title;
        nombreCelda.className=' izq-lineal';
        row.appendChild(nombreCelda);

        // Precio del producto
        const precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.price}`;
        precioCelda.className='der-lineal';
        row.appendChild(precioCelda);

        // Cantidad (hardcodeado a 1)
        const cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        cantidadCelda.className='der-lineal';
        row.appendChild(cantidadCelda);

        // Subtotal
        const subtotal = item.price; 
        const subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        subtotalCelda.className='der-lineal';
        row.appendChild(subtotalCelda);

        // Agregar fila a la tabla
        carritoTableBody.appendChild(row);

        // Sumar al total
        total += subtotal;
    })
    // Mostrar el total redondeado a 2 decimales.
    totalgeneral.textContent = `$ ${total.toFixed(2)}`;
}

    // Botón para limpiar el carrito y volver al inicio
    document.getElementById('limpiar-carrito').addEventListener('click', () => 
    {
        localStorage.removeItem('carrito'); 
        window.location.href = './productos.html'; 
    });

    // Botón para finalizar la compra con sweet Alert
    document.getElementById('finalizar-compra').addEventListener('click', () => 
    {
        Swal.fire({
            title: 'Compra Procesada',
            text: 'Se completó satisfactoriamente tu compra',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el carrito después de finalizar la compra
        localStorage.removeItem('carrito'); 
        
        // Redirigir al inicio despues de 4 segundos
        setTimeout(() => {
        window.location.href = './productos.html'; 
        }, 4000);     
    });
})