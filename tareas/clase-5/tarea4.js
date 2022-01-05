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
let $promedioLista = document.querySelector("#promedio-lista");
$promedioLista.insertAdjacentHTML("beforeend", promedioArray);

function promediarNumerosArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}
