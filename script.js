const secciones = ["menu", "header", "work-experience", "education",
                   "skills", "certificates", "languages"];

async function cargar() {
  const cv = document.getElementById("cv");
  for (const s of secciones) {
    try {
      const r = await fetch(`sections/${s}.html`);
      if (!r.ok) continue;
      cv.insertAdjacentHTML("beforeend", await r.text());
    } catch (e) {}
  }
}
cargar();
