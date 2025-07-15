const materias = document.querySelectorAll(".materia");
const infoBox = document.getElementById("info-box");

materias.forEach(m => {
  m.addEventListener("click", () => {
    infoBox.textContent = m.dataset.info;
    infoBox.classList.remove("oculto");
  });
});
Agrego script
