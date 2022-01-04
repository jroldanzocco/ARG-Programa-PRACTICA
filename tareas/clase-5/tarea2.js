let $botonInformacion = document.querySelector("#capturar-datos");

$botonInformacion.onclick = function () {
  const nombreUsuario = document.querySelector("#nombre-usuario").value;
  const apellidoUsuario = document.querySelector("#apellido-usuario").value;
  const edadUsuario = Number(document.querySelector("#edad-usuario").value);
  const saludoBienvenida = document.querySelector("#saludo-bienvenida");

  document.querySelector("#informacion-completa").value = combinarDatos(
    nombreUsuario,
    apellidoUsuario,
    edadUsuario
  );

  saludoBienvenida.innerText = "Bienvenido, " + nombreUsuario + "!";
};
function combinarDatos(s1, s2, s3) {
  return s1 + " " + s2 + ", " + s3 + " años";
}
