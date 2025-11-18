let indiceActual = 0; // El índice de la imagen que se está viendo
const slides = document.querySelector('.carrusel-slide');
const imagenes = document.querySelectorAll('.carrusel-slide img');
const totalSlides = imagenes.length;

function mostrarSlide(indice) {
    // 1. Maneja el bucle del carrusel:
    // Si llegamos al final, volvemos al principio (0).
    if (indice >= totalSlides) {
        indiceActual = 0;
    } 
    // Si vamos antes del inicio, vamos al final.
    else if (indice < 0) {
        indiceActual = totalSlides - 1;
    } else {
        indiceActual = indice;
    }
    
    // 2. Calcula la posición de desplazamiento:
    // Mueve el contenedor de slides (carrusel-slide) a la izquierda.
    // El desplazamiento es el 'indiceActual' multiplicado por '-100%' 
    // (porque cada imagen es el 100% del ancho del contenedor).
    const desplazamiento = -indiceActual * 100;
    slides.style.transform = `translateX(${desplazamiento}%)`;
}

// Función que se llama al hacer clic en los botones
function moverSlide(n) {
    mostrarSlide(indiceActual + n);
}

// Inicializa el carrusel mostrando el primer slide
mostrarSlide(indiceActual);