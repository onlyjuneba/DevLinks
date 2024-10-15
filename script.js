function toggleMode() {
  const html = document.documentElement
  const img = document.getElementById("ft")

  html.classList.toggle("light") // Altera o tema de Dark para Light

  if (html.classList.contains("light")) {
    img.src = "assets/avt-light.jfif" // Nova imagem
  } else {
    img.src = "assets/avt.jfif" // Volta para a imagem original
  }
}
