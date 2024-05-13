/*
// Problema 1
// -calculadora mela
calculadora = (a, b, opc) => {
    a = parseFloat(a); // Convertir a número
    b = parseFloat(b); // Convertir a número

    switch (opc) {
        case "1":
            a += b;
            break;
        case "2":
            a -= b;
            break;
        case "3":
            a *= b;
            break;
        case "4":
            a /= b;
            break;
        case "5":
            a **= b; // Potencia
            break;
        case "6":
            if (b <= 2 && b >= 0) {
                a **= (1 / 2); // Raíz cuadrada
            } else if (b > 2) {
                a **= (1 / b); // Raíz general
            } else {
                alert("No se puede realizar raiz con numeros negativos.");
            }
            break;
        default:
            console.log("Opción no válida");
            return;
    }

    alert(`Tu resultado es: ${a}`);
}

let a = prompt("Valor A:");
let b = prompt("Valor B:");
let opc = prompt("1 Suma, 2 Resta, 3 Multi, 4 Divi, 5 Potencia, 6 Sqrt");
calculadora(a, b, opc);
*/

