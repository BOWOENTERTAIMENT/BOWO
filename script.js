function toggleDarkMode() {
  const body = document.body;
  const boton = document.getElementById("modoBoton");

  if (body.classList.contains("modo-cósmico")) {
    body.classList.remove("modo-cósmico");
    body.classList.add("modo-claro");
    boton.textContent = "Modo Original";
  } else if (body.classList.contains("modo-claro")) {
    body.classList.remove("modo-claro");
    boton.textContent = "Modo Cósmico";
  } else {
    body.classList.add("modo-cósmico");
    boton.textContent = "Modo Claro";
  }
}
