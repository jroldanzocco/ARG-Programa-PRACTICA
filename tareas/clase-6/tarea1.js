function crearNuevoMiembro(cantidad) {
  const cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  const nodoForm = document.querySelector("#integrantes");
  let nuevoDiv = document.createElement("div");
  let nuevoLabel = document.createElement("label");
  nuevoLabel.textContent = "Ingrese la edad del familiar N°" + cantidad + ": ";
  let nuevoInput = document.createElement("input");
  nuevoInput.type = "number";

  nodoForm.appendChild(nuevoDiv);
  nuevoDiv.appendChild(nuevoLabel);
  nuevoLabel.appendChild(nuevoInput);
}

function agregarMasMiembros(numeroDeIntegrantes) {
  for (let i = 1; i <= numeroDeIntegrantes; i++) {
    crearNuevoMiembro(i);
  }
}

$botonEnviarIntegrantes = document.querySelector("#envio");

$botonEnviarIntegrantes.onclick = function () {
  const numeroDeIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  if (numeroDeIntegrantes <= 0) {
    return false;
  } else {
    agregarMasMiembros(numeroDeIntegrantes);
  }
};

/*
let $nuevoForm;
let $nuevoInput;

function agregarMiembroFamiliar() {
  $nuevoForm = document.createElement("form");
  $nuevoForm.className = "integrantes";

  const $nuevoLabel = document.createElement("label");
  $nuevoLabel.innerText = "Ingresa la edad del familiar";
  $nuevoInput = document.createElement("input");
  $nuevoInput.type = "number";
  $nuevoInput.className = "edad";
}

*/
