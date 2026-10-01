function calDescuento(precioT) {
    let descuento = 0;
    
    if (precioT >= 200) {
        descuento = precioT * 0.15;
    } else if (precioT >= 100 && precioT < 200) {
        descuento = precioT * 0.10;
    } else if (precioT >= 50 && precioT < 100) {
        descuento = precioT * 0.05;
    }
    return descuento;
}

function actEvaluable() {
    let contador = 1;
    let salir = false
    let gastoTotal = 0;
    let gastoMedio = 0;
    let gastoMayor = 0;
    let gastoMenor = 0;
    
    while (!salir) {
        let precioP = parseInt(window.prompt("Dime el precio de un producto: "));
        let cant = parseInt(window.prompt("Dime la cantidad de unidades: "));
        let totalSinDescuento = precioP * cant;
        let descuento = calDescuento(totalSinDescuento);
        let totalConDescuento = totalSinDescuento - descuento;
        let precioConIva = totalConDescuento * 1.21;
        gastoTotal = gastoTotal + precioConIva;
        
        if (contador === 1) {
            gastoMayor = precioConIva;
            gastoMenor = precioConIva;
        } else{
            if (precioConIva > gastoMayor) {
                gastoMayor = precioConIva;
            }
            if (precioConIva < gastoMenor) {
                gastoMenor = precioConIva;
            }
        }
        
        let opc = window.prompt("Desea realizar otra operacion (Introduce Si o No)? ");
        if (opc === 'Si') {
            contador++;
        } else if (opc === 'No') {
            gastoMedio = gastoTotal / contador;
            console.log(`Has realizado ${contador} operaciones, el gasto total realizado es ${gastoTotal}, el gasto medio es ${gastoMedio}, el gasto mayor es ${gastoMayor} y el gasto menor es ${gastoMenor}`);
            salir = true;
        }
    }
}

actEvaluable();