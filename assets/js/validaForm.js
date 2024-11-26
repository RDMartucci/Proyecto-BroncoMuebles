// const formulario = document.getElementById('form-contacto');
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nombre = document.getElementById('nombre').value;
//     const email = document.getElementById('email').value;
//     const mensaje = document.getElementById('mensaje').value;
//     const telefono = document.getElementById('telefono').value;
//     const comentario = document.getElementById('comentario').value;
    
//     if (nombre == "" || email == "" || mensaje == "" || comentario == "") {
//         alert("Por favor, complete todos los campos requeridos");
//     }
// }

// Seleccionar el formulario
const formulario = document.getElementById('form-contacto');

// Agregar evento de submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const origenContacto = document.getElementById('origen-contacto').value;
    const horarios = [
        document.getElementById('manaña').checked,
        document.getElementById('tarde').checked,
        document.getElementById('noche').checked
    ];

    // Validar campos requeridos
    if (nombre === "" || email === "" || telefono === "" || comentario === "") {
        alert("Por favor, complete todos los campos requeridos.");
        return; // Detener ejecución
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

    // Validar selección de origen de contacto
    if (origenContacto === "") {
        alert("Por favor, seleccione cómo nos conoció.");
        return;
    }

    // Validar al menos un horario seleccionado
    if (!horarios.includes(true)) {
        alert("Por favor, seleccione al menos un horario de preferencia.");
        return;
    }

    // Si todas las validaciones son correctas
    alert("Formulario enviado correctamente.");
    formulario.submit(); // Enviar formulario
});
