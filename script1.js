// Ejemplo 1
console.log("Hola mundo");

// Ejemplo 2
const nombre1 = "Diego";
console.log(`Hola ${nombre1}`);

// Ejemplo 3
const nombre2 = window.prompt("Introduce tu nombre: ");
console.log(`Hola ${nombre2}`);

// Ejemplo 4: Primer if
const edad = window.prompt("Introduce tu edad: ");
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Ejemplo 5: Definicion de variables segun su ambito

//const: constante (su valor no varía)
//let: ambito de bloque
//var: ambito de funcion

//Definicion funcion
function calcula_edad() {
    const edad2 = window.prompt("Introduce tu edad: ");
    if (edad2 >= 18) {
        var mensaje = "Eres mayor de edad";
    } else {
        let mensaje = "Eres menor de edad";
    }
    console.log(mensaje);
}

//Llamada a la función
calcula_edad();

// Ejemplo 6
let auxiliar;
auxiliar = 10;
console.log(auxiliar);

auxiliar = "Mi casa es roja";
console.log(auxiliar);

auxiliar = true;
console.log(auxiliar);

auxiliar = 1432.12;
console.log(auxiliar);


// Ejemplo 7: Primer bucle
function potencia(base, exponente) {

let resultado = 1;

    while(exponente > 0){
        resultado *= base;
        exponente --;
    }

    return resultado;
}

let base = 2;
let exponente = 3;
console.log(`El resultado de ${base}^${exponente} es:${potencia(base, exponente)}`);