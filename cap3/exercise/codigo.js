/*Problema A
-Mostrar las particularidades de los 3 celulares
-Cada uno debe tener color, peso, resolucion de pantalla,
camara y memoria ram.
-Debe poder prender, reiniciar, tomar fotos y grabar.

class celular{
    constructor(nombre,color,peso,respantalla,camara,ram){
        this.nombre=nombre;
        this.color=color;
        this.peso=peso;
        this.respantalla=respantalla;
        this.camara=camara;
        this.ram=ram;
    }

    prender = () =>{ document.write("Prendio el celular"+"<br>");}
    reiniciar = () =>{ document.write("Se reinicio el celular"+"<br>");}
    tomarfoto = () =>{ document.write("Se tomo una foto"+"<br>");}
    grabar = () =>{ document.write("Se esta grabando"+"<br>");}

    toString = () =>{
        document.write(`Nombre: ${this.nombre}, Color: ${this.color}, Peso: ${this.peso}, Resolucion de pantalla: ${this.respantalla}, Camara: ${this.camara}, Ram: ${this.ram}`);
        document.write("<br>")
    }
}

const samsung = new celular("Samsung","Negro","200gr","1080px","5","16Gb ram");
const alcatel = new celular("Alcatel","blanco","100gr","1080px","1","4Gb ram");
const iphone = new celular("iPhone","rosado","220gr","1080px","2","8Gb ram");

samsung.prender();
alcatel.reiniciar();
iphone.grabar();

/*Problema B
-Implemetar todo lo de Problema A pero para celulares de gama alta.*/

/*Problema C
- Crear un sistema para decidir que app descargar
-debe contener la cantidad de descargas, puntuacion y peso.
-se deben poder instalar, abrir, cerrar y densistalar*/



class apps{
    constructor(numdescargas,puntuacion,peso){
        this.numdescargas = numdescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
    }
    
    instalar = () => {console.log("Instaldo");}
    abrir = () => {console.log("Abriendo");}
    cerrar = () => {console.log("Cerrando");}
    densistalar = () => {console.log("Densistalado");}
}


function recomendarApp(numDescargas, calificacion, peso) {
    // Verificar si la aplicación tiene más de 1 millón de descargas y una calificación mayor o igual a 4.5
    if (numDescargas > 1000000 && calificacion >= 4.5) {
        return "¡Esta aplicación es muy popular y tiene una excelente calificación! Te la recomendamos.";
    } else if (peso > 100) {
        // Verificar si la aplicación es pesada (más de 100 MB)
        return "Esta aplicación podría ocupar mucho espacio en tu dispositivo. Considera si realmente la necesitas.";
    } else {
        // En otros casos, simplemente dar una recomendación genérica
        return "Esta aplicación parece interesante. ¡Pruébala y dinos qué opinas!";
    }
}

// Ejemplo de uso de la función
console.log(recomendarApp(1500000, 4.7, 80)); // Salida esperada: "¡Esta aplicación es muy popular y tiene una excelente calificación! Te la recomendamos."
