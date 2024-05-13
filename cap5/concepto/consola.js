// Importar el módulo readline de Node.js
const readline = require('readline');

// Crear una interfaz de lectura para leer desde la entrada estándar (consola) y escribir en la salida estándar (consola)
const rl = readline.createInterface({
  input: process.stdin,   // Utiliza la entrada estándar del proceso (consola) como entrada para la interfaz de lectura
  output: process.stdout  // Utiliza la salida estándar del proceso (consola) como salida para la interfaz de lectura
});

// Solicitar al usuario que ingrese el primer número mediante un mensaje en la consola
rl.question('Por favor, introduce el primer número: ', (inputNumero1) => {
  // Convertir el primer número ingresado por el usuario a tipo de datos numérico
  const numero1 = parseFloat(inputNumero1);

  // Solicitar al usuario que ingrese el segundo número mediante un mensaje en la consola
  rl.question('Por favor, introduce el segundo número: ', (inputNumero2) => {
    // Convertir el segundo número ingresado por el usuario a tipo de datos numérico
    const numero2 = parseFloat(inputNumero2);

    // Calcular la suma de los dos números
    const suma = numero1 + numero2;

    // Mostrar en la consola un mensaje que indica la suma de los dos números ingresados por el usuario
    console.log('La suma de', numero1, 'y', numero2, 'es:', suma);

    // Cerrar la interfaz de lectura para indicar que ya no se necesita leer más entrada del usuario desde la consola
    rl.close();
  });
});