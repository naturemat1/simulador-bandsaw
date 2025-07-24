// Tooltips de hotspots
const puntos = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');

puntos.forEach(p => {
  p.addEventListener('click', (e) => {
    const titulo = p.dataset.titulo;
    const desc = p.dataset.desc;
    tooltip.innerHTML = `<strong>${titulo}</strong><br>${desc}`;
    tooltip.style.top = `${e.pageY - 60}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.display = 'block';
  });
});

// Ocultar tooltip si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('hotspot')) {
    tooltip.style.display = 'none';
  }
});

// Funciones para abrir y cerrar modales
function abrirModal(tipo) {
  const modal = document.getElementById(`modal-${tipo}`);
  if (modal) modal.style.display = 'flex';
}

function cerrarModal(tipo) {
  const modal = document.getElementById(`modal-${tipo}`);
  if (modal) modal.style.display = 'none';
}

// Cerrar modales si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
  const modales = document.querySelectorAll('.modal');
  modales.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
