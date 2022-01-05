let listadeNumeros = document.querySelectorAll("li");
let arrayGenerado = convertirListaEnArray(listadeNumeros);

function convertirListaEnArray(lista) {
  let arrayGenerado = [];
  for (let i = 0; i < lista.length; i++) {
    arrayGenerado.push(Number(lista[i].innerText));
  }
  return arrayGenerado;
}

let promedioArray = promediarNumerosArray(arrayGenerado);
document
  .querySelector("#promedio-lista")
  .insertAdjacentHTML("beforeend", promedioArray);

function promediarNumerosArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}

let numeroChico = numeroMasChico(arrayGenerado);

document
  .querySelector("#numero-mas-chico")
  .insertAdjacentHTML("beforeend", numeroChico);

function numeroMasChico(array) {
  let numeroChico = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroChico) {
      numeroChico = array[i];
    }
  }
  return numeroChico;
}

let numeroGrande = numeroMasGrande(arrayGenerado);

document
  .querySelector("#numero-mas-grande")
  .insertAdjacentHTML("beforeend", numeroGrande);

function numeroMasGrande(array) {
  let numeroGrande = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroGrande) {
      numeroGrande = array[i];
    }
  }
  return numeroGrande;
}
