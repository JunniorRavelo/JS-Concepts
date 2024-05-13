/*
Probema 2
-Que la funcion nos devuelva
.profesor asignado
.nombre de los alumnos
-funcion que nos indique en cuantas clases esta cofla
-nombre de esas clases y su profesores
*/
class Clase {
    constructor(materia, profesor, alumnos) {
        this.materia = materia;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }
}

const clases = [
    new Clase("Cálculo", "Ing. Maria", ["Andres", "Mateo", "Santiago", "Junnior", "Cofla"]),
    new Clase("Español", "Ing. Deiby", ["Andres", "Mateo", "Santiago", "Junnior", "Cindy"]),
    new Clase("Inglés", "Lic. Nuñez", ["Andres", "Mateo", "Santiago", "Junnior", "Pedro"]),
    new Clase("Ciencias", "Sicario JR", ["Andres", "Mateo", "Santiago", "Junnior", "Cofla"])
];

busquedaAlumno = (nombre) => {
    let materias = [];
    console.log("Buscando alumno:", nombre);

    for (const clase of clases) {
        if (clase.alumnos.includes(nombre)) {
            console.log("Encontrado en", clase.materia);
            materias.push(clase.materia);
        }
    }

    return materias;
}

verMaterias = (materia, docente, grupo) => {
    const mensaje = `${materia} | Docente: ${docente} | Alumnos: ${grupo.join(', ')}`;
    alert(mensaje);
}

main = () => {
    let opc = prompt("1. Buscar alumno, 2. Ver materias");

    switch (opc) {
        case "1":
            let nombre = prompt("Introduce nombre:");
            alert("Materias de " + nombre + ": " + busquedaAlumno(nombre).join(', '));
            break;
        case "2":
            for (const clase of clases) {
                verMaterias(clase.materia, clase.profesor, clase.alumnos);
            }
            break;
        case "0":
            break;
        default:
            alert("Opción incorrecta! Vuelve a introducir la opción.");
            main();
            break;
    }
}
main();
