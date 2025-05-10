
// Modo claro y cósmico
function toggleDarkMode() {
  const body = document.body;
  if (body.classList.contains("modo-cósmico")) {
    body.classList.remove("modo-cósmico");
  }
  body.classList.toggle("modo-claro");
}

function toggleCosmicMode() {
  const body = document.body;
  if (body.classList.contains("modo-claro")) {
    body.classList.remove("modo-claro");
  }
  body.classList.toggle("modo-cósmico");
}

// Imagen popup
document.querySelectorAll('.fotos img').forEach(img => {
  img.addEventListener('click', () => {
    const popup = document.getElementById('popup-img');
    const popupImg = popup.querySelector('img');
    popupImg.src = img.src;
    popup.style.display = 'flex';
  });
});

function cerrarPopup() {
  document.getElementById('popup-img').style.display = 'none';
}

// Animación al cargar página
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Efecto de fade al hacer scroll
const observers = document.querySelectorAll(".fade-in");
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
observers.forEach(el => appearOnScroll.observe(el));


// Función para abrir y cerrar el menú hamburguesa
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('menu-visible');
});

// Control del menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelector(".menu-links");

    toggleButton.addEventListener("click", () => {
        menuLinks.classList.toggle("menu-visible");
    });
});
