//***-------------VALIDACIÓN FORMULARIO ----------***//

document.getElementById("formulario-nosotros").addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    Swal.fire(
        'Bien Hecho!',
        'Ya se enviaron tus datos!',
        'success'
      )
}