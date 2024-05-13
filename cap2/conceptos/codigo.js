/*
//Arrays
let frutas = ["banana","manzana","pera"];

//Ciclo for | .length da el tamaño del vector (se comieza desde 1)
for (var i = 0; i < frutas.length; i++) {
	alert(frutas[i]);
}
*/

/*
// Vector de tipo objeto (objeto JavaScript)
let pc1 = {
    nombre: "JrPC",
    procesador: "Intel core I9",
    ram: "8Gb",
    espacion: "500Gb"
};

// Vector comun (array)
let pc2 = ["JrPC", "Intel core I9", "8Gb", "500Gb"];

// Impresion del vector comun
document.write(pc2[0]);
document.write("<br>"); // Agrega una nueva línea

// Impresion del vector de tipo objeto: objeto["propiedad"]
document.write(pc1["ram"]);
*/

//Ciclos
/*
//Ciclos while
let x = 0;

//while(condicional){accion}
while(x >= 0){

	//Condicional dentro del while | break: romper ciclo
	if(x == 5){
		break;
	}else{
		document.write("Numero: "+x);
		document.write("<br>");
	}
	x++;
}

//do while : primero hace y luego condiciona
x=0;
do{
	if(x == 5){
		break;
	}else{
		document.write("Numero: "+x);
		document.write("<br>");
	}
	x++;

}while(x >= 0)


/*Los ciclos while o do while son de tipo infinitos o 
indeterminados, ya que son inciertos las ejecuciones
que se daran.*/
/*
//Ciclo For(variable inicializadora; condicional; accion despues de la accion del condicional
// o incrementacion){accion  despues de la condicion}
for (let i = 0; i <= 5; i++) {
	document.write(i + "<br>");
}
//El break rompe toda la condicion, mientras el "continue" solo salta la accion


//ForIn y ForOff
let animales = ["gato","perro","loro","vaca"];

// Utilizando for...in para iterar sobre las propiedades de un objeto
document.write("<br>");
for(animal in animales){
	document.write(animal + "<br>");
}

// Utilizando for...of para iterar sobre los valores de un objeto iterable
document.write("<br>");
for(animal of animales){
	document.write(animal + "<br>");
}



// Definimos una etiqueta llamada "etiqueta".
document.write("<br>");
etiqueta: 
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // Si i es igual a 2 y j es igual a 2, salimos del loop etiquetado como "etiqueta".
        if (i === 2 && j === 2) {
            break etiqueta;
        }
        // Escribimos en el documento los valores de i y j.
        document.write(i, j);
    }
}
*/