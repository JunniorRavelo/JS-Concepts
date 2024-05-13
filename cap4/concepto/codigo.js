//se vieron arrays de tipo string
//metodos del string
//metodos de arrays
//Arreglos de arrays
//metodos de matematicas


//Metodos String
// Método: length
// Descripción: Devuelve la longitud de la cadena.
let str = "Hola Mundo";
console.log(str.length); // Salida esperada: 10

// Método: toUpperCase
// Descripción: Convierte la cadena a mayúsculas.
console.log(str.toUpperCase()); // Salida esperada: "HOLA MUNDO"

// Método: toLowerCase
// Descripción: Convierte la cadena a minúsculas.
console.log(str.toLowerCase()); // Salida esperada: "hola mundo"

// Método: indexOf
// Descripción: Devuelve el índice de la primera aparición de un valor específico dentro de la cadena.
console.log(str.indexOf('Mundo')); // Salida esperada: 5

// Método: lastIndexOf
// Descripción: Devuelve el índice de la última aparición de un valor específico dentro de la cadena.
console.log(str.lastIndexOf('o')); // Salida esperada: 7

// Método: slice
// Descripción: Devuelve una parte de la cadena, seleccionada desde el inicio hasta el final especificado.
console.log(str.slice(2, 6)); // Salida esperada: "la M"

// Método: substring
// Descripción: Devuelve una parte de la cadena, entre los índices indicados.
console.log(str.substring(2, 6)); // Salida esperada: "la M"

// Método: replace
// Descripción: Reemplaza un valor específico por otro valor en la cadena.
console.log(str.replace('Mundo', 'Amigo')); // Salida esperada: "Hola Amigo"

// Método: split
// Descripción: Divide la cadena en un array de subcadenas, utilizando un separador especificado.
console.log(str.split(' ')); // Salida esperada: ["Hola", "Mundo"]

// Método: trim
// Descripción: Elimina los espacios en blanco al principio y al final de la cadena.
let strWithSpaces = "   Hola Mundo   ";
console.log(strWithSpaces.trim()); // Salida esperada: "Hola Mundo"

// Método: charAt
// Descripción: Devuelve el carácter en el índice especificado de la cadena.
console.log(str.charAt(0)); // Salida esperada: "H"

// Método: charCodeAt
// Descripción: Devuelve el valor Unicode del carácter en el índice especificado de la cadena.
console.log(str.charCodeAt(0)); // Salida esperada: 72

// Método: concat
// Descripción: Combina dos o más cadenas y devuelve una nueva cadena.
let greeting = "Hola";
let name = "Mundo";
console.log(greeting.concat(", ", name)); // Salida esperada: "Hola, Mundo"

// Método: includes
// Descripción: Determina si la cadena contiene otra cadena o carácter especificado.
console.log(str.includes("Mundo")); // Salida esperada: true

// Método: startsWith
// Descripción: Determina si la cadena comienza con los caracteres de otra cadena especificada.
console.log(str.startsWith("Hola")); // Salida esperada: true

// Método: endsWith
// Descripción: Determina si la cadena termina con los caracteres de otra cadena especificada.
console.log(str.endsWith("Mundo")); // Salida esperada: true

// Método: repeat
// Descripción: Devuelve una nueva cadena que contiene la cadena original repetida un número de veces especificado.
console.log(str.repeat(3)); // Salida esperada: "Hola MundoHola MundoHola Mundo"

// Método: padStart
// Descripción: Rellena la cadena actual con una cadena dada para que la cadena resultante alcance una longitud especificada. El relleno se aplica desde el inicio de la cadena.
console.log(str.padStart(15, "¡")); // Salida esperada: "¡¡¡Hola Mundo"

// Método: padEnd
// Descripción: Rellena la cadena actual con una cadena dada para que la cadena resultante alcance una longitud especificada. El relleno se aplica al final de la cadena.
console.log(str.padEnd(15, "!")); // Salida esperada: "Hola Mundo!!!"



//Metodos de arrays
let array = [1, 2, 3, 4, 5];

// Método: push
// Descripción: Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
array.push(6);
console.log(array); // Salida esperada: [1, 2, 3, 4, 5, 6]

// Método: pop
// Descripción: Elimina el último elemento de un array y lo devuelve.
let lastElement = array.pop();
console.log(lastElement); // Salida esperada: 6
console.log(array); // Salida esperada: [1, 2, 3, 4, 5]

// Método: shift
// Descripción: Elimina el primer elemento de un array y lo devuelve.
let firstElement = array.shift();
console.log(firstElement); // Salida esperada: 1
console.log(array); // Salida esperada: [2, 3, 4, 5]

// Método: unshift
// Descripción: Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
array.unshift(0);
console.log(array); // Salida esperada: [0, 2, 3, 4, 5]

// Método: slice
// Descripción: Devuelve una copia de una parte del array dentro de un nuevo array, seleccionada desde el inicio hasta el final indicado.
let slicedArray = array.slice(1, 3);
console.log(slicedArray); // Salida esperada: [2, 3]

// Método: splice
// Descripción: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// Aquí se elimina un elemento y se agrega uno nuevo en su lugar.
array.splice(1, 1, "dos");
console.log(array); // Salida esperada: [0, "dos", 3, 4, 5]

// Método: indexOf
// Descripción: Devuelve el primer índice en el que se encuentra un elemento especificado en el array.
console.log(array.indexOf("dos")); // Salida esperada: 1

// Método: join
// Descripción: Une todos los elementos de un array en una cadena y devuelve esta cadena.
console.log(array.join("-")); // Salida esperada: "0-dos-3-4-5"

// Método: concat
// Descripción: Combina dos o más arrays y devuelve un nuevo array.
let newArray = array.concat([6, 7]);
console.log(newArray); // Salida esperada: [0, "dos", 3, 4, 5, 6, 7]

