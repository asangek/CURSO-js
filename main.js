
// Variables
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

// Función para jugar
function jugar() {
    while (intentos > 0) {
        let intentoUsuario = prompt(`Adivina el número secreto (entre 1 y 10). Intentos restantes: ${intentos}`);
        
        if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 10) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }

        if (parseInt(intentoUsuario) === numeroSecreto) {
            alert("¡Felicidades! Has adivinado el número secreto.");
            return;
        } else {
            alert("Incorrecto. ¡Sigue intentando!");
            intentos--;
        }
    }

    alert(`¡Agotaste tus intentos! El número secreto era ${numeroSecreto}.`);
}















/*
// Variables
let suma = 0;
const cantidadNumeros = 5;

// Función para obtener un número del usuario
function obtenerNumeroUsuario() {
    let numero = prompt("Ingresa un número:");

    // Validar que se haya ingresado un número
    while (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        numero = prompt("Ingresa un número:");
    }

    return parseFloat(numero);
}

// Bucle para obtener la suma de varios números
for (let i = 0; i < cantidadNumeros; i++) {
    let numeroUsuario = obtenerNumeroUsuario();
    suma += numeroUsuario;
}

// Mostrar el resultado
alert(`La suma de los ${cantidadNumeros} números ingresados es: ${suma}`);
*/
