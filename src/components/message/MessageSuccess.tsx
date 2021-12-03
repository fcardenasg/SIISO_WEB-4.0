import Swal from "sweetalert2";

/* Mensaje de éxito */
const MessageSuccess = () => {
    Swal.fire({
        /* position: 'top-end', */
        icon: 'success',
        title: 'Registro guardar con éxito',
        showConfirmButton: false,
        timer: 1500
    })
}

/* Mensaje de confirmación para eliminar */


/* Exportación de metodos */
export {
    MessageSuccess
}