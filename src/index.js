function getItDone(event) {
    // Buscamos si el elemento clickeado es un botón o está dentro de uno
    let btn = event.target.closest('button');
    if (!btn) return;

    let allbtn = document.getElementsByTagName('button');
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('img-popup');
    let captionText = document.getElementById('caption');

    // Resetear colores de botones
    for (let b of allbtn) {
        b.style.backgroundColor = ""; 
    }

    if (btn.dataset.img) {
        // Marcamos el botón como activo
        btn.style.backgroundColor = "lightgreen";
        
        // Configuramos y mostramos el Modal
        modal.style.display = "block";
        modalImg.src = btn.dataset.img;
        captionText.innerHTML = btn.innerText;
    }
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Eventos
document.addEventListener('click', getItDone);

// Cerrar al clickar en la X
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Cerrar al clickar fuera de la imagen (en el fondo negro)
window.addEventListener('click', function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
});