import Swal from "sweetalert2";

const MessageSuccess = () => {
    Swal.fire({
        /* position: 'top-end', */
        icon: 'success',
        title: 'Registro guardar con éxito',
        showConfirmButton: false,
        timer: 1500
    })
}

export {
    MessageSuccess
}