

let nombre = prompt ("INGRESA TU NOMBRE")









// Variables
let mensaje = "¡Hola, bienvenido al proyecto JavaScript!";
const PI = 3.1416; 








// Bucle
let contador = 1;
while (contador <= 5) {
    console.log(`Iteración ${contador}`);
    contador++;
}

// Condicionales
let respuesta = prompt("¿Te gusta JavaScript? (responde sí o no)");

if (respuesta && respuesta.toLowerCase() === "sí") {
    alert("¡Genial!");
} else {
    alert("¡Oh no! ¡Seguro que te encantará aprender más sobre JavaScript!");
}

// Funciones
function suma(a, b) {
    return a + b;
}

// Array con métodos
let frutas = ['manzana', 'pera', 'plátano'];

frutas.push('naranja');
frutas.pop();

console.log(frutas);

// Función que utiliza todas las características
function proyectoCompleto() {
    console.log(mensaje);
    console.log(`El valor de PI es: ${PI}`);
    
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }

    let resultado = suma(5, 3);
    console.log(`La suma de 5 y 3 es: ${resultado}`);
}
*/