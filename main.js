
function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    return b !== 0 ? a / b : "No es posible dividir por cero";
  }
  
  const operacion = prompt("Selecciona una operación (+, -, *, /):");
  
  const num1 = parseFloat(prompt("Ingresa el primer número:"));
  const num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
  let resultado;
  
  switch (operacion) {
    case "+":
      resultado = sumar(num1, num2);
      break;
    case "-":
      resultado = restar(num1, num2);
      break;
    case "*":
      resultado = multiplicar(num1, num2);
      break;
    case "/":
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = "Operación no válida";
  }















