let $botonCalcular = document.querySelector("#calcular-duracion");

$botonCalcular.onclick = function () {
  let segundosClases = document.querySelectorAll(".segundo");
  let minutosClases = document.querySelectorAll(".minuto");
  let horasClases = document.querySelectorAll(".hora");
  const segundosPorMinuto = 60;
  const minutosPorHora = 60;

  segundosClases = calcularTotalTiempo(segundosClases);
  minutosClases = calcularTotalTiempo(minutosClases);
  horasClases = calcularTotalTiempo(horasClases);

  let minutosExcedentes = 0;
  let horasExcedentes = 0;

  if (segundosClases >= segundosPorMinuto) {
    minutosExcedentes = Math.trunc(convertirSegundoAMinuto(segundosClases));
    minutosClases = minutosExcedentes + minutosClases;
    segundosClases = segundosClases - minutosExcedentes * segundosPorMinuto;
  } else if (minutosClases >= minutosPorHora) {
    horasExcedentes = Math.trunc(convertirMinutoAHora(minutosClases));
    horasClases = horasExcedentes + horasClases;
    minutosClases = minutosClases - minutosExcedentes * minutosPorHora;
  }

  document.querySelector(
    "#duracion-total"
  ).innerText = `${horasClases} horas ${minutosClases} minutos ${segundosClases} segundos`;
};

function convertirSegundoAMinuto(segundos) {
  return segundos / 60;
}

function convertirMinutoAHora(minutos) {
  return minutos / 60;
}

function calcularTotalTiempo(tiempoParcial) {
  let totalTiempo = 0;
  for (let i = 0; i < tiempoParcial.length; i++) {
    totalTiempo += Number(tiempoParcial[i].value);
  }
  return totalTiempo;
}
