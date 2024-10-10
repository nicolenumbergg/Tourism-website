function comprarPaquete(paquete) {
    // Mostrar el modal
    document.getElementById("modal").style.display = "block";
    document.getElementById("mensajeCompra").innerText = "¡Compra exitosa! Has comprado el paquete: " + paquete;
}

function cerrarModal() {
    // Ocultar el modal
    document.getElementById("modal").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
