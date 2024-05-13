/*Problema A : Resuelto
-Dejar pasar a los +18
-El primero que entre despues de las 2am no paga

let free = true;
const validarUser = (edad, time) =>{
    if(edad >= 18){
        if(time >= 2 && free ){
            alert("Entrada gratis! por ser el perimero en pasa a las 2am");
            free= false;
        }else{
            alert(`Puedes pasar pero tienes que pagar.Son las ${time}:00Hs`);
        }
    }else{
        alert("Eres menor de edad!");
    }
}

validarUser(prompt("Introduce edad: "),prompt("Introduce hora: "));
validarUser(prompt("Introduce edad: "),prompt("Introduce hora: "));
validarUser(prompt("Introduce edad: "),prompt("Introduce hora: "));
*/

/*Problema B : Resuelto
-Crear mini-sistema para registrar presentes (p) y ausentes (a)
-Pasados 30 dias, mostrar su situacion final del alumnos
-maximo de 10% de ausencia

let nombre;

const valida = (Ausente) => (Ausente <= 3);

const sistema= () =>{
    nombre = prompt("Nombre: ");
    diaA = prompt("Dias ausentes: ");
    diaP = prompt("Dias asistidios: ")

    diaA = parseInt(diaA);
    diaP = parseInt(diaP);

    tdias = diaA + diaP;

    if(tdias <= 30 && diaA+diaP > 0){
        return valida(diaA);
    }else if(tdias > 30){
        alert("Error, hay mas de 30 dias.");
    }
}

numAlumnos = prompt("Numero de alumnos: ");
for(let i = 1; i <= numAlumnos; i++){
    if(sistema()){
        alert(`Situacion: Ha pasado por asistencia. ${nombre}`)
    }else{
        alert(`Situacion: Ha perdido por asistencia. ${nombre}`)
    }
}
alert("Sistema finalizado");
*/