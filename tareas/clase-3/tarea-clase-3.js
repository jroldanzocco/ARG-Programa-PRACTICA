// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function saludarUsuario() {
  let nombreUsuario = prompt("¿Cual es tu nombre?").toLowerCase();
  const NOMBRE_NOVIA = "anabella";
  const MI_NOMBRE = "jeremias";

  if (nombreUsuario === MI_NOMBRE) {
    return "Hola, tocayo! Yo tambien me llamo " + MI_NOMBRE;
  } else if (nombreUsuario === NOMBRE_NOVIA) {
    return "Hola " + nombreUsuario + ", te llamas igual que mi novia";
  } else {
    return "Hola " + nombreUsuario;
  }
}
//console.log(saludarUsuario());

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
function compararEdades() {
  const MI_EDAD = 26;
  let edadUsuario = Number(prompt("¿Cuántos años tenés?"));

  if (edadUsuario === MI_EDAD) {
    return "Tenemos la misma edad";
  } else if (edadUsuario > MI_EDAD) {
    return "Sos mayor que yo";
  } else if (edadUsuario < MI_EDAD) {
    return "Sos menor que yo";
  } else {
    return compararEdades();
  }
}

//console.log(compararEdades());

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function pedirDocumento() {
  let tieneDocumento = (
    prompt("¿Tenes documento?(contestar si o no)") || ""
  ).toLowerCase();

  if (tieneDocumento === "si") {
    return comprobarMayoriaDeEdad();
  } else if (tieneDocumento === "no") {
    alert("anda a buscar tu DNI");
    return pedirDocumento();
  } else {
    alert("No entiendo lo que decis, por favor volvé a intentarlo");
    return pedirDocumento();
  }
}

function comprobarMayoriaDeEdad() {
  let edadUsuario = Number(prompt("¿Cuantos años tenes?"));

  if (edadUsuario >= 18) {
    return "Podes pasar";
  } else if (edadUsuario < 18) {
    return "Sos menor de edad, no podes pasar";
  } else {
    alert("No entiendo lo que decis, volve a intentarlo");
    return comprobarMayoriaDeEdad();
  }
}

//console.log(pedirDocumento());
