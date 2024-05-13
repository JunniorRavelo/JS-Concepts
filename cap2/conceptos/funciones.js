//Funciones simple
function saludar(){
    let respuesta = prompt("Hola como fue tu dia?");

    if(respuesta=="bien"){
        alert("me alegra");
    }else{
        alert("una pena");
    }
}

//Funciones con retorno
function resultado(){
    return 3;
}

//Funciones con parametros
function suma(n1,n2){
    let res = n1 + n2;
    return res;
}

//Funciones flecha
const hello = (nombre) => {
    alert("Hola " + nombre);
}
//Funcion flecha simplificada
const bye = nombre => alert("Adios " + nombre);


