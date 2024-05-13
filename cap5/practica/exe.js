const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('<- Promedio de notas ->');

rl.question('Cantidad de notas: ', (cantidad) => {
    cantidad = parseInt(cantidad);
    let sumatoria = 0;

    // Función para leer las notas recursivamente
    const leerNotas = (indice) => {
        if (indice <= cantidad) {
            rl.question(`Nota ${indice}: `, (nota) => {
                nota = parseFloat(nota);
                if (!isNaN(nota)) {
                    sumatoria += nota;
                    leerNotas(indice + 1); // Llama a la función recursivamente para leer la siguiente nota
                } else {
                    console.log('Por favor, introduce un número válido.');
                    leerNotas(indice); // Si la nota no es válida, vuelve a solicitarla
                }
            });
        } else {
            // Calcula el promedio una vez que se hayan leído todas las notas
            const promedio = sumatoria / cantidad;
            console.log(`Promedio: ${promedio}`);
            rl.close(); // Cierra la interfaz de lectura
        }
    };

    leerNotas(1); // Comienza a leer las notas desde el índice 1
});
