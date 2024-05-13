// Método console.log(): Muestra un mensaje de información en la consola.
console.log("Hola mundo");

// Método console.error(): Muestra un mensaje de error en la consola.
console.error("Hubo un error");

// Método console.warn(): Muestra un mensaje de advertencia en la consola.
console.warn("¡Cuidado!");

// Método console.info(): Muestra un mensaje de información en la consola, similar a console.log().
// A menudo se usa para mensajes informativos específicos.
console.info("Esto es una información");

// Método console.table(): Muestra datos tabulares en la consola. Útil para visualizar arrays y objetos en forma de tabla.
const datos = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 }
];
console.table(datos);

// Método console.debug(): Muestra un mensaje de depuración en la consola. 
// Es similar a console.log(), pero a menudo se usa para mensajes de depuración específicos.
console.debug("Mensaje de depuración");

// Método console.assert(): Muestra un mensaje de error si la afirmación dada es falsa.
console.assert(2 + 2 === 5, "¡2 + 2 no es igual a 5!");

// Método console.time(): Inicia un temporizador con un nombre específico.
console.time("temporizador");

// Método console.timeEnd(): Detiene el temporizador con el nombre específico y muestra la duración.
console.timeEnd("temporizador");

// Método console.group(): Crea un grupo en la consola. Todos los mensajes posteriores se muestran dentro de este grupo.
console.group("Grupo principal");

// Mensajes dentro del grupo
console.log("Mensaje 1");
console.log("Mensaje 2");

// Método console.groupEnd(): Cierra el grupo actual en la consola.
console.groupEnd();

// Método console.clear(): Limpia la consola.
console.clear();

// Método console.trace(): Muestra la pila de llamadas actual en la consola.
console.trace("Mensaje de traza");

// Método console.dir(): Muestra una representación detallada de un objeto en la consola.
const objeto = { nombre: "Juan", edad: 30 };
console.dir(objeto);

// Método console.count(): Registra el número de veces que se llama a console.count() con una etiqueta específica.
for (let i = 0; i < 3; i++) {
  console.count("contador");
}

// Método console.timeLog(): Muestra el tiempo transcurrido desde que se inició un temporizador específico.
console.time("temporizador2");
setTimeout(() => {
  console.timeLog("temporizador2", "Tiempo transcurrido");
}, 1000);

// Método console.memory(): Muestra información sobre el uso de memoria en la consola.
console.memory();

