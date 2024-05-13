//POO

/*
//Creacion de la clase
class animal{

    //Creacion del constructor con sus inicializador
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${especie}, tengo ${edad} de edad y soy de color ${color}`;
    }

    verInformacion = ()=>{
        document.write(this.info);
    }
}

const perro = new animal("perro",1,"negro" + "<br>");
const gato = new animal("gato",2,"blanco" + "<br>");
const pajaro = new animal("pajaro",3,"azul" + "<br>");

perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

/*Nuevos conceptos: Abstraccion, modularidad (modularizacion),
encapsulamiento y polimorfismo.
Abstraccion: crea la clase lo mas simple posible.
Modularidad: convertir el gran problemas en muchos pero pequeños problemas
encapsulamiento: atributos de forma publica o privada
polimorfismo: permite tratar objetos de diferentes clases de manera uniforme
si estas comparten una relación de herencia o implementan una interfaz común. */

//Polimorfismo
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${especie}, tengo ${edad} de edad y soy de color ${color}`;
    }

    verInformacion = () => document.write(this.info);
    // ladrar = ()=>{
    //     if(this.especie == "perro"){
    //         document.write("Guau");
    //     }else{
    //         document.write("No puedo ladrar, no soy un perro :(");
    //     }
    //     document.writeln("<br>");
    // }
}

// const perro = new animal("perro",1,"negro" + "<br>");
// const gato = new animal("gato",2,"blanco" + "<br>");
// const pajaro = new animal("pajaro",3,"azul" + "<br>");

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

//Herencia
class canino extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar = () => alert("Guau")

    set modificarRaza(newRaza) { this.raza = newRaza; }
    get obtenerRaza(){return this.raza;}

}

const perro = new canino("perro",1,"negro","Pitbull");
// perro.ladrar();
perro.modificarRaza = "Pinche";
console.log(perro.obtenerRaza)