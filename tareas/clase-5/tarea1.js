let $botonCalcular = document.querySelector("#calcular-salario");

$botonCalcular.onclick = function () {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = salarioAnual / 12;

  document.querySelector("#salario-mensual").value = salarioMensual.toFixed(2);
};
