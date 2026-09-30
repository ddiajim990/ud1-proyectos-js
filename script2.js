// Ejemplo 1: Datos personales. Declara variables para almacenar tu
// nombre, edad y ciudad. Muestra por consola una frase con esos datos.
function ejemplo1() {
    const nombre = window.prompt("Introduce tu nombre: ");
    const edad = window.prompt("Introduce tu edad: ");
    const ciudad = window.prompt("Introduce tu ciudad: ");

    console.log(`Hola ${nombre} tienes ${edad} y vives en ${ciudad}`);
}
//ejemplo1();

// Ejemplo 2: Área de un rectángulo. Declara las variables necesarias 
// para almacenar la base y la altura de un rectángulo y calcula su área.
function ejemplo2() {
    const base_rect = window.prompt("Introduce la base del rectángulo: ");
    const altura_rect = window.prompt("Introduce la altura del rectángulo: ");

    console.log(`El area del rectangulo es ${base_rect * altura_rect}`);
}
//ejemplo2();

// Ejemplo 3: Conversión de temperatura. Dada una temperatura en grados 
// Celsius, calcula y muestra su equivalente en grados Fahrenheit.
function ejemplo3() {
    const temperatura = window.prompt("una temperatura en grados Celsius: ");

    console.log(`La temperatura en grados Fahrenheit es ${(temperatura * 1.8) + 32}`);
}
//ejemplo3();

// Ejemplo 4: Precio de una compra. Dado el precio de un producto y el 
// número de unidades compradas, calcula y muestra el importe total.
function ejemplo4() {
    const precio = window.prompt("Introduce el precio del producto: ");
    const cantidad = window.prompt("Introduce el numero de unidades compradas: ");

    console.log(`El precio de la compra es ${precio * cantidad}€`);
}
//ejemplo4();

// Ejemplo 5: Nómina sencilla. Dado un salario bruto, calcula una 
// retención del 15% y muestra el salario neto.
function ejemplo5() {
    const salario = window.prompt("Introduce el salario bruto: ");

    console.log(`El salario neto es ${salario * 0.85}€`);
}
//ejemplo5();

// Ejemplo 6: Conversión de segundos. Dado un número de segundos, 
// calcula cuántas horas, minutos y segundos representa.
function ejemplo6() {
    const total_segundos = parseInt(window.prompt("Introduce un numero de segundos"));

    const num_horas = Math.floor(total_segundos / 3600);
    const resto_num_horas = total_segundos % 3600;

    const num_minutos = Math.floor(resto_num_horas / 60);
    const rest_num_minutos = resto_num_horas % 60;

    const num_segundos = rest_num_minutos;

    console.log(`${total_segundos} segundos son: ${num_horas} horas, 
        ${num_minutos} minutos y ${num_segundos} segundos`);
}
//ejemplo6();

// Ejemplo 7: Intercambio de valores. Declara dos variables a y b e 
// intercambia sus valores. Muestra el resultado antes y después del intercambio.
function ejemplo7() {
    let a = 10;
    let b = 8;
    console.log(`Valores originales: a = ${a}, b = ${b}`);

    let aux = a;
    a = b;
    b = aux;

    console.log(`Valores intercambiados: a = ${a}, b = ${b}`);
}
//ejemplo7();

// Ejemplo 8: Mayor de edad. Dada una edad, indica mediante un mensaje 
// si la persona es mayor o menor de edad.
function ejemplo8() {
    const edad = parseInt(window.prompt("Introduce tu edad: "));

    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}
//ejemplo8();

// Ejemplo 9: Número positivo, negativo o cero. Dado un número, 
// indica si es positivo, negativo o igual a cero.
function ejemplo9() {
    const num = parseFloat(window.prompt("Introduce un numero: "));

    if (num > 0) {
        console.log("El numero es positivo.");
    } else if (num < 0) {
        console.log("El numero es negativo.");
    } else {
        console.log("El numero es cero.");
    }
}
//ejemplo9();

// Ejemplo 10: Número mayor. Dados dos números, muestra cuál de ellos 
// es mayor o indica si son iguales.
function ejemplo10() {
    const num1 = parseFloat(window.prompt("Introduce el primer numero: "));
    const num2 = parseFloat(window.prompt("Introduce el segundo numero: "));

    if (num1 > num2) {
        console.log(`El numero mayor es ${num1}`);
    } else if (num2 > num1) {
        console.log(`El numero mayor es ${num2}`);
    } else {
        console.log("Ambos numeros son iguales.");
    }
}
//ejemplo10();

// Ejemplo 11: Calificación. Dada una nota entre 0 y 10, muestra si 
// corresponde a un suspenso, aprobado, notable o sobresaliente.
function ejemplo11() {
    const nota = parseFloat(window.prompt("Introduce una nota entre 0 y 10: "));

    if (nota >= 0 && nota < 5) {
        console.log("Suspenso");
    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota <= 10) {
        console.log("Sobresaliente");
    } else {
        console.log("Nota introducida no valida.");
    }
}
//ejemplo11();

// Ejemplo 12: Año bisiesto. Dado un año, determina si es bisiesto.
function ejemplo12() {
    const anio = parseInt(window.prompt("Introduce un año: "));

    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        console.log(`El año ${anio} es bisiesto.`);
    } else {
        console.log(`El año ${anio} no es bisiesto.`);
    }
}
//ejemplo12();

// Ejemplo 13: Calculadora. Dados dos números y un operador (+,-,*,/), 
// realiza la operación correspondiente utilizando una estructura de selección.
function ejemplo13() {
    const num1 = parseFloat(window.prompt("Introduce el primer número: "));
    const operador = window.prompt("Introduce un operador (+, -, *, /): ");
    const num2 = parseFloat(window.prompt("Introduce el segundo número: "));

    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            console.log(`El resultado es: ${resultado}`);
            break;
        case '-':
            resultado = num1 - num2;
            console.log(`El resultado es: ${resultado}`);
            break;
        case '*':
            resultado = num1 * num2;
            console.log(`El resultado es: ${resultado}`);
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
                console.log(`El resultado es: ${resultado}`);
            } else {
                console.error("Error: No se puede dividir por cero.");
            }
            break;
        default:
            console.error("Operador no válido. Por favor, usa +, -, * o /.");
            break;
    }
}
//ejemplo13();

// Ejemplo 14: Números del 1 al 10. Muestra por consola los números 
// del 1 al 10 utilizando una estructura de repetición.
function ejemplo14() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
//ejemplo14();

// Ejemplo 15: Números pares. Muestra todos los números pares 
// comprendidos entre 1 y 100.
function ejemplo15() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}
//ejemplo15();

// Ejemplo 16: Tabla de multiplicar. Dado un número, muestra su 
// tabla de multiplicar del 1 al 10.
function ejemplo16() {
    const num = parseInt(window.prompt("Introduce un número para ver su tabla de multiplicar: "));

    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
//ejemplo16();

// Ejemplo 17: Suma hasta N. Dado un número N, calcula la suma de 
// todos los números comprendidos entre 1 y N.
function ejemplo17() {
    const n = parseInt(window.prompt("Introduce un número N: "));

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log(`La suma de todos los números del 1 al ${n} es: ${suma}`);
}
//ejemplo17();

// Ejemplo 18: Factorial. Dado un número entero positivo, calcula y 
// muestra su factorial.
function ejemplo18() {
    const num = parseInt(window.prompt("Introduce un número entero positivo: "));

    if (num >= 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log(`El factorial de ${num} es: ${factorial}`);
    } else {
        console.error("El número debe ser positivo.");
    }
}
//ejemplo18();

// Ejemplo 19: Múltiplos de 3. Dado un número N, muestra todos los 
// múltiplos de 3 comprendidos entre 1 y N.
function ejemplo19() {
    const n = parseInt(window.prompt("Introduce un número N: "));

    console.log(`Múltiplos de 3 comprendidos entre 1 y ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
//ejemplo19();

// Ejemplo 20: Función saludar. Crea una función saludar(nombre) que 
// reciba un nombre como parámetro y muestre un saludo personalizado.
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido.`);
}

function ejemplo20() {
    const nombreUsuario = window.prompt("Introduce tu nombre: ");
    saludar(nombreUsuario);
}
//ejemplo20();

// Ejemplo 21: Función para calcular un área. Crea una función 
// calcularArea(base, altura) que reciba la base y la altura de un 
// rectángulo y devuelva su área.
function calcularArea(base, altura) {
    return base * altura;
}

function ejemplo21() {
    const base = parseFloat(window.prompt("Introduce la base del rectángulo: "));
    const altura = parseFloat(window.prompt("Introduce la altura del rectángulo: "));
    const area = calcularArea(base, altura);
    console.log(`El área del rectángulo es: ${area}`);
}
//ejemplo21();

// Ejemplo 22: Función para comprobar la mayoría de edad. Crea una 
// función esMayorDeEdad(edad) que devuelva true si la edad es igual 
// o superior a 18 y false en caso contrario.
function esMayorDeEdad(edad) {
    return edad >= 18;
}

function ejemplo22() {
    const edadUsuario = parseInt(window.prompt("Introduce tu edad: "));
    if (esMayorDeEdad(edadUsuario)) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}
//ejemplo22();

// Ejemplo 23: Función para obtener el mayor. Crea una función que 
// reciba dos números y devuelva el mayor de ellos.
function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function ejemplo23() {
    const numero1 = parseFloat(window.prompt("Introduce el primer número: "));
    const numero2 = parseFloat(window.prompt("Introduce el segundo número: "));
    const mayor = obtenerMayor(numero1, numero2);
    console.log(`El número mayor entre ${numero1} y ${numero2} es: ${mayor}`);
}
//ejemplo23();

// Ejemplo 24: Función de conversión. Crea una función que reciba una 
// temperatura en grados Celsius y devuelva su equivalente en Fahrenheit.
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

function ejemplo24() {
    const celsius = parseFloat(window.prompt("Introduce la temperatura en grados Celsius: "));
    const fahrenheit = convertirCelsiusAFahrenheit(celsius);
    console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
}
//ejemplo24();

// Ejemplo 25: Calculadora mediante funciones. Crea las funciones sumar(), 
// restar(), multiplicar() y dividir(). Después, crea un programa que 
// solicite dos números y una operación y utilice la función correspondiente.
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function ejemplo25() {
    const num1 = parseFloat(window.prompt("Introduce el primer número: "));
    const operacion = window.prompt("Introduce una operación (+, -, *, /): ");
    const num2 = parseFloat(window.prompt("Introduce el segundo número: "));

    let resultado;

    switch (operacion) {
        case '+':
            resultado = sumar(num1, num2);
            console.log(`El resultado de la suma es: ${resultado}`);
            break;
        case '-':
            resultado = restar(num1, num2);
            console.log(`El resultado de la resta es: ${resultado}`);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            console.log(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case '/':
            if (num2 !== 0) {
                resultado = dividir(num1, num2);
                console.log(`El resultado de la división es: ${resultado}`);
            } else {
                console.error("Error: No se puede dividir por cero.");
            }
            break;
        default:
            console.error("Operación no válida.");
            break;
    }
}
//ejemplo25();

// Ejemplo 26: Validador de notas. Crea una función que reciba una nota 
// y devuelva un texto indicando si es «Suspenso», «Aprobado», «Notable» 
// o «Sobresaliente». Utiliza después la función para comprobar varias notas.
function validarNota(nota) {
    if (nota >= 0 && nota < 5) {
        return "Suspenso";
    } else if (nota >= 5 && nota < 7) {
        return "Aprobado";
    } else if (nota >= 7 && nota < 9) {
        return "Notable";
    } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
        return "Nota introducida fuera de rango";
    }
}

function ejemplo26() {
    let comprobarMas = true;

    while (comprobarMas) {
        const entrada = window.prompt("Introduce una nota de 0 a 10 (o escribe 'salir' para terminar): ");

        if (entrada.toLowerCase() === 'salir') {
            comprobarMas = false;
        } else {
            const nota = parseFloat(entrada);
            if (!isNaN(nota)) {
                console.log(`La nota ${nota} corresponde a un: ${validarNota(nota)}`);
            } else {
                console.error("Por favor, introduce un número válido.");
            }
        }
    }
}
//ejemplo26();

// Ejemplo 27: Número primo. Crea una función esPrimo(numero) que 
// determine si un número es primo. La función deberá devolver true o false.
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
function ejemplo27() {
    const num = parseInt(window.prompt("Introduce un número para saber si es primo: "));
    console.log(`¿El número ${num} es primo? ${esPrimo(num)}`);
}
//ejemplo27();

// Ejemplo 28: Adivina el número. Genera un número aleatorio entre 1 y 10. 
// El usuario deberá intentar adivinarlo. El programa indicará si ha 
// acertado o si el número introducido es mayor o menor que el número secreto.
function ejemplo28() {
    const secreto = Math.floor(Math.random() * 10) + 1;
    let acierto = false;
    while (!acierto) {
        let intento = parseInt(window.prompt("Adivina el número (1 al 10): "));
        if (intento === secreto) {
            console.log("¡Has acertado!");
            acierto = true;
        } else if (intento > secreto) {
            console.log("El número secreto es menor.");
        } else {
            console.log("El número secreto es mayor.");
        }
    }
}
//ejemplo28();

// Ejemplo 29: Menú de operaciones. Crea un programa que muestre un menú 
// con las opciones «Sumar», «Restar», «Multiplicar», «Dividir» y «Salir». 
// El usuario podrá seleccionar una opción y realizar la operación 
// correspondiente. Utiliza funciones, estructuras de selección y de repetición.
function ejemplo29() {
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Sumar 2.Restar 3.Multiplicar 4.Dividir 5.Salir");
        if (opc === '5') {
            salir = true;
            continue;
        }
        let a = parseFloat(window.prompt("Número 1:"));
        let b = parseFloat(window.prompt("Número 2:"));
        if (opc === '1') console.log(a + b);
        if (opc === '2') console.log(a - b);
        if (opc === '3') console.log(a * b);
        if (opc === '4') console.log(a / b);
    }
}
//ejemplo29();

// Ejemplo 30: Calculadora avanzada. Crea una calculadora que permita 
// realizar operaciones de suma, resta, multiplicación, división y potencia. 
// El programa deberá mostrar un menú, solicitar los datos necesarios y 
// utilizar una función diferente para cada operación. El menú deberá 
// repetirse hasta que el usuario seleccione la opción de salir. Controla 
// también la división entre cero.
function divisionSegura(a, b) { return b === 0 ? "Error: División por cero" : a / b; }
function potenciaEx30(a, b) { return a ** b; }
function ejemplo30() {
    let salir = false;
    while (!salir) {
        let opc = window.prompt("a.Sumar b.Restar c.Multiplicar d.Dividir e.Potencia f.Salir");
        if (opc.toLowerCase() === 'f') { salir = true; break; }
        let num1 = parseFloat(window.prompt("Número 1:"));
        let num2 = parseFloat(window.prompt("Número 2:"));

        switch (opc.toLowerCase()) {
            case 'a': console.log(num1 + num2); break;
            case 'b': console.log(num1 - num2); break;
            case 'c': console.log(num1 * num2); break;
            case 'd': console.log(divisionSegura(num1, num2)); break;
            case 'e': console.log(potenciaEx30(num1, num2)); break;
            default: console.log("Opción no válida");
        }
    }
}
//ejemplo30();

// Ejemplo 31: Sistema de calificaciones. Crea un programa que permita 
// introducir las notas de un alumno. El programa deberá solicitar 
// inicialmente el número de notas que se van a introducir y, mediante 
// un bucle, solicitar cada una de ellas. Utiliza funciones para calcular 
// la nota media y determinar la calificación final: Suspenso, Aprobado, 
// Notable o Sobresaliente. Comprueba que las notas estén entre 0 y 10.
function calcularMedia(suma, cantidad) { return suma / cantidad; }
function calificacionFinal(nota) {
    if (nota < 5) return "Suspenso";
    if (nota < 7) return "Aprobado";
    if (nota < 9) return "Notable";
    return "Sobresaliente";
}
function ejemplo31() {
    const totalNotas = parseInt(window.prompt("¿Cuántas notas vas a introducir?"));
    let suma = 0;
    for (let i = 0; i < totalNotas; i++) {
        let nota;
        do {
            nota = parseFloat(window.prompt(`Introduce la nota ${i + 1} (0-10):`));
        } while (nota < 0 || nota > 10 || isNaN(nota));
        suma += nota;
    }
    const media = calcularMedia(suma, totalNotas);
    console.log(`Media: ${media.toFixed(2)} - Calificación: ${calificacionFinal(media)}`);
}
//ejemplo31();

// Ejemplo 32: Cajero automático. Simula el funcionamiento de un cajero 
// automático. El usuario comienza con un saldo determinado y puede 
// consultar su saldo, retirar dinero, ingresar dinero o salir. Crea una 
// función para cada operación y utiliza un menú que se repita hasta 
// seleccionar la opción de salida. El programa deberá impedir retirar 
// una cantidad superior al saldo disponible y cantidades negativas o cero.
let saldoCajero = 1000;
function consultarSaldo() { console.log(`Saldo actual: ${saldoCajero}€`); }
function ingresar(cant) { if (cant > 0) saldoCajero += cant; }
function retirar(cant) {
    if (cant > 0 && cant <= saldoCajero) saldoCajero -= cant;
    else console.log("Operación inválida o fondos insuficientes.");
}
function ejemplo32() {
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Consultar 2.Ingresar 3.Retirar 4.Salir");
        switch (opc) {
            case '1': consultarSaldo(); break;
            case '2': ingresar(parseFloat(window.prompt("Cantidad a ingresar:"))); break;
            case '3': retirar(parseFloat(window.prompt("Cantidad a retirar:"))); break;
            case '4': salir = true; break;
        }
    }
}
//ejemplo32();

// Ejemplo 33: Juego de adivinanza. Crea un juego en el que el programa 
// genere un número aleatorio entre 1 y 100 y el usuario tenga que adivinarlo. 
// Después de cada intento, el programa indicará si el número introducido 
// es mayor o menor que el número secreto. El juego deberá contar el número 
// de intentos y finalizar cuando el jugador acierte. Organiza el programa 
// utilizando funciones.
function evaluarIntento(intento, secreto) {
    if (intento === secreto) return 0;
    return intento > secreto ? 1 : -1;
}

function ejemplo33() {
    const secreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let acierto = false;
    while (!acierto) {
        let intento = parseInt(window.prompt("Adivina el número (1-100):"));
        intentos++;
        
        let evaluacion = evaluarIntento(intento, secreto); 
        
        if (evaluacion === 0) {
            console.log(`¡Acertaste en ${intentos} intentos!`);
            acierto = true;
        } else if (evaluacion === 1) {
            console.log("Menor...");
        } else {
            console.log("Mayor...");
        }
    }
}
//ejemplo33();

// Ejemplo 34: Conversor de unidades. Crea un programa que permita 
// convertir diferentes unidades. El usuario podrá elegir entre convertir 
// kilómetros a millas, grados Celsius a Fahrenheit, kilogramos a libras 
// o euros a dólares. Utiliza un menú, una función para cada conversión 
// y una estructura de repetición que permita realizar varias conversiones 
// hasta seleccionar la opción de salir.
function aMillas(km) { return km * 0.621371; }
function aFahrenheit(c) { return (c * 1.8) + 32; }
function aLibras(kg) { return kg * 2.20462; }
function aDolares(eur) { return eur * 1.05; }
function ejemplo34() {
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Km>Millas 2.C>F 3.Kg>Libras 4.Eur>USD 5.Salir");
        if (opc === '5') { salir = true; continue; }
        let val = parseFloat(window.prompt("Introduce valor a convertir:"));
        if (opc === '1') console.log(`${aMillas(val)} millas`);
        if (opc === '2') console.log(`${aFahrenheit(val)} °F`);
        if (opc === '3') console.log(`${aLibras(val)} libras`);
        if (opc === '4') console.log(`${aDolares(val)} dólares`);
    }
}
//ejemplo34();

// Ejemplo 35: Control de acceso. Crea un programa que simule el acceso a 
// una aplicación. El programa tendrá un usuario y una contraseña almacenados 
// en variables. El usuario dispondrá de un máximo de tres intentos para 
// introducir correctamente ambos datos. Crea una función que compruebe 
// las credenciales y otra que muestre el resultado del acceso. Si se 
// superan los tres intentos, el acceso deberá quedar bloqueado.
function checkCredenciales(u, p) { return u === "admin" && p === "1234"; }
function mostrarResultado(exito) { console.log(exito ? "Acceso concedido" : "Credenciales incorrectas"); }
function ejemplo35() {
    let intentos = 0;
    let bloqueado = false;
    while (intentos < 3 && !bloqueado) {
        let user = window.prompt("Usuario:");
        let pass = window.prompt("Contraseña:");
        let valido = checkCredenciales(user, pass);
        mostrarResultado(valido);
        if (valido) return;
        intentos++;
    }
    console.log("Sistema bloqueado. Demasiados intentos.");
}
//ejemplo35();

// Ejemplo 36: Facturación de un producto. Crea un programa que calcule el 
// importe final de una compra. El usuario deberá introducir el precio del 
// producto y la cantidad adquirida. El programa aplicará diferentes descuentos 
// según el importe total: sin descuento para compras inferiores a 50 €, un 
// 5% entre 50 € y 100 €, un 10% entre 100 € y 200 € y un 15% para importes 
// superiores a 200 €. Finalmente, deberá calcular el IVA del 21% y mostrar 
// el precio final. Utiliza funciones para separar los diferentes cálculos.
function calcularDescuento(importe) {
    if (importe > 200) return importe * 0.15;
    if (importe >= 100) return importe * 0.10;
    if (importe >= 50) return importe * 0.05;
    return 0;
}
function calcularIva(base) { return base * 0.21; }
function ejemplo36() {
    let precio = parseFloat(window.prompt("Precio del producto:"));
    let cant = parseInt(window.prompt("Cantidad:"));
    let subtotal = precio * cant;
    let desc = calcularDescuento(subtotal);
    let baseImponible = subtotal - desc;
    let iva = calcularIva(baseImponible);
    console.log(`Subtotal: ${subtotal}€ | Descuento: -${desc}€ | IVA: +${iva}€ | TOTAL: ${baseImponible + iva}€`);
}
//ejemplo36();

// Ejemplo 37: Menú de gestión de una cuenta. Diseña un pequeño programa 
// que simule una cuenta bancaria. El programa deberá comenzar con un saldo 
// inicial y mostrar un menú con las opciones consultar saldo, ingresar dinero, 
// retirar dinero, consultar si la cuenta tiene saldo suficiente y salir. 
// Cada operación deberá estar implementada mediante una función. El menú 
// se repetirá hasta que el usuario decida salir y deberán controlarse 
// las operaciones no válidas.
let saldoBancario = 500;
function haySaldo(cant) { return saldoBancario >= cant; }
function ejemplo37() {
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Ver Saldo 2.Ingresar 3.Retirar 4.Comprobar solvencia 5.Salir");
        switch (opc) {
            case '1': console.log(saldoBancario); break;
            case '2': saldoBancario += parseFloat(window.prompt("Cantidad:")); break;
            case '3':
                let ret = parseFloat(window.prompt("Cantidad:"));
                if (haySaldo(ret)) saldoBancario -= ret;
                else console.log("Saldo insuficiente.");
                break;
            case '4': console.log(haySaldo(parseFloat(window.prompt("Cantidad a comprobar:"))) ? "Sí hay saldo" : "No hay saldo"); break;
            case '5': salir = true; break;
        }
    }
}
//ejemplo37();

// Ejemplo 38: Estadísticas de números. Crea un programa que permita 
// introducir una cantidad determinada de números. El programa deberá utilizar 
// un bucle para procesarlos y calcular el mayor, el menor, la suma y la media. 
// No se permite utilizar arrays. Organiza el código mediante funciones 
// siempre que sea posible. Al finalizar, muestra todos los resultados por consola.
function ejemplo38() {
    let cant = parseInt(window.prompt("¿Cuántos números vas a procesar?"));
    let max = -Infinity, min = Infinity, suma = 0;

    for (let i = 0; i < cant; i++) {
        let n = parseFloat(window.prompt(`Número ${i + 1}:`));
        if (n > max) max = n;
        if (n < min) min = n;
        suma += n;
    }
    if (cant > 0) {
        console.log(`Suma: ${suma}, Media: ${suma / cant}, Mayor: ${max}, Menor: ${min}`);
    }
}
//ejemplo38();

// Ejemplo 39: Programa integrador: gestión de notas. Desarrolla un programa 
// completo para gestionar las calificaciones de un alumno. El programa 
// deberá permitir introducir el nombre del alumno y varias notas, calcular 
// la media, determinar la calificación final y mostrar si el alumno ha 
// aprobado. Deberá existir un menú con diferentes opciones y el programa 
// continuará funcionando hasta seleccionar «Salir». Utiliza funciones para 
// realizar las operaciones principales y controla los posibles valores 
// incorrectos introducidos por el usuario.
function ejemplo39() {
    let nombre = window.prompt("Nombre del alumno:");
    let suma = 0, cant = 0;
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Añadir nota 2.Ver estado 3.Salir");
        if (opc === '1') {
            let n = parseFloat(window.prompt("Nota (0-10):"));
            if (n >= 0 && n <= 10) { suma += n; cant++; }
            else console.log("Nota inválida.");
        } else if (opc === '2' && cant > 0) {
            let media = suma / cant;
            console.log(`Alumno: ${nombre} | Media: ${media.toFixed(2)} | Aprobado: ${media >= 5 ? 'Sí' : 'No'}`);
        } else if (opc === '3') {
            salir = true;
        }
    }
}
//ejemplo39();

// Ejemplo 40: Reto final: simulador de tienda. Desarrolla un pequeño 
// programa que simule una compra en una tienda. El usuario podrá consultar 
// diferentes opciones de compra, introducir el precio y cantidad de un 
// producto, calcular el subtotal, aplicar descuentos según el importe y 
// calcular el IVA. El programa deberá disponer de un menú que permita 
// realizar operaciones hasta seleccionar «Finalizar compra».
function ejemplo40() {
    let totalAcumulado = 0;
    let salir = false;
    while (!salir) {
        let opc = window.prompt("1.Añadir producto 2.Finalizar compra");
        if (opc === '1') {
            let p = parseFloat(window.prompt("Precio:"));
            let c = parseInt(window.prompt("Cantidad:"));
            totalAcumulado += (p * c);
            console.log(`Subtotal actual: ${totalAcumulado}€`);
        } else if (opc === '2') {
            let descuento = calcularDescuento(totalAcumulado);
            let base = totalAcumulado - descuento;
            let iva = calcularIva(base);
            console.log(`SUBTOTAL: ${totalAcumulado}€ | DESCUENTOS: -${descuento}€ | IVA(21%): ${iva}€ | A PAGAR: ${base + iva}€`);
            salir = true;
        }
    }
}
//ejemplo40();