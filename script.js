const secciones = ["menu", "header", "work-experience", "education",
                   "skills", "certificates", "languages"];

function mostrar(id) {
  document.querySelectorAll("#cv section").forEach(s => {
    s.hidden = s.id !== id;
  });
  document.querySelectorAll("#menu button").forEach(b => {
    b.classList.toggle("activo", b.dataset.seccion === id);
  });
}

async function cargar() {
  const cv = document.getElementById("cv");
  for (const s of secciones) {
    try {
      const r = await fetch(`sections/${s}.html`);
      if (!r.ok) continue;
      cv.insertAdjacentHTML("beforeend", await r.text());
    } catch (e) {}
  }
  document.querySelectorAll("#menu button").forEach(b => {
    b.addEventListener("click", () => mostrar(b.dataset.seccion));
  });
  mostrar("header");
}
cargar();
