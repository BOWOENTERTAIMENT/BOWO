function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector("button");

  if (body.classList.contains("modo-cósmico")) {
    body.classList.remove("modo-cósmico");
    button.textContent = "Modo Cósmico";
  } else {
    body.classList.add("modo-cósmico");
    button.textContent = "Modo Oscuro Místico";
  }
}
