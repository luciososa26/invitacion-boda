
const FECHA_EVENTO = "2026-02-22T12:30:00-03:00"; // Cambiá si hace falta

const cuenta = document.getElementById("cuentaRegresiva");
const audio = document.getElementById("musicaFondo");


function pad2(n) {
  return String(n).padStart(2, "0");
}

function actualizarCuenta() {
  if (!cuenta) return; 

  const ahora = new Date();
  const objetivo = new Date(FECHA_EVENTO);
  const diff = objetivo - ahora;

  if (diff <= 0) {
    cuenta.textContent = "¡Llegó el gran día!";
    return;
  }

  const totalSeg = Math.floor(diff / 1000);
  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const minutos = Math.floor((totalSeg % 3600) / 60);
  const segundos = totalSeg % 60;

  cuenta.textContent =
    `${pad2(dias)} Días ` +
    `${pad2(horas)} Horas ` +
    `${pad2(minutos)} Minutos ` +
    `${pad2(segundos)} Segundos`;
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);


function intentarReproducir() {
  if (!audio) return;
  audio.volume = 0.5;

  const p = audio.play();
  if (p && typeof p.catch === "function") {
    p.catch(() => {
    });
  }
}

window.addEventListener("load", intentarReproducir);

function iniciarConToque() {
  if (!audio) return;
  audio.volume = 0.5;
  audio.play();

  document.removeEventListener("click", iniciarConToque);
  document.removeEventListener("touchstart", iniciarConToque);
}

document.addEventListener("click", iniciarConToque);
document.addEventListener("touchstart", iniciarConToque);
