
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
