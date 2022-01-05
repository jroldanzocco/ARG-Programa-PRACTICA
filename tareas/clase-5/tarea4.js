let listadeNumeros = document.querySelectorAll("li");
let arrayGenerado = convertirListaEnArray(listadeNumeros);

function convertirListaEnArray(lista) {
  let = arrayGenerado = [];
  for (let i = 0; i < lista.length; i++) {
    arrayGenerado.push(Number(lista[i].innerText));
  }
  return arrayGenerado;
}
