
function toggleDarkMode() {
  const body = document.body;
  const modoCosmicoActivo = body.classList.contains("modo-cósmico");

  if (modoCosmicoActivo) {
    body.classList.remove("modo-cósmico");
  }

  body.classList.toggle("modo-claro");
}

function toggleCosmicMode() {
  const body = document.body;
  const modoClaroActivo = body.classList.contains("modo-claro");

  if (modoClaroActivo) {
    body.classList.remove("modo-claro");
  }

  body.classList.toggle("modo-cósmico");
}
// Mostrar imagen ampliada
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
