unTexto = document.getElementById('texto');
function mostrar(event) {
    event.preventDefault(); // Evita la recarga de la página
    if (unTexto.hidden) {
        unTexto.hidden = false;
    } else {
        unTexto.hidden = true;
    }
}
function alternar() {
    // Aquí puedes agregar el código para la función alternar
}