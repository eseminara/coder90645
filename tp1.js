let nombre = prompt("Bienvenido al servicio de ATM. ¿Cuál es tu nombre?");
alert(`Hola ${nombre}, bienvenido al ATM.`);


const menuOperaciones = {
    opciones: ["Saldo", "Ingresar", "Retirar", "Salir"],
    mostrar: function() {
    let mensaje = "Operaciones disponibles:\n";
    for (let i = 0; i < this.opciones.length; i++) {
        mensaje += `${i + 1}. ${this.opciones[i]}\n`;
    }
    return mensaje;
    }
};


const cuentaUsuario = {
    saldo: 1000,
    movimientos: [],
    mostrarSaldo: function() {
    alert(`Tu saldo actual es: $${this.saldo}`);
    },
    registrarMovimiento: function(tipo, cantidad) {
    this.movimientos.push({
        tipo: tipo,
        cantidad: cantidad,
        fecha: new Date().toLocaleString()
    });
    }
};


function ingresarDinero(cuenta) {
    const cantidad = parseFloat(prompt("¿Cuánto dinero deseas ingresar?"));
    if (isNaN(cantidad)) {
    alert("Por favor ingresa una cantidad válida.");
    return;
    }
    cuenta.saldo += cantidad;
    cuenta.registrarMovimiento("Ingreso", cantidad);
    alert(`Has ingresado $${cantidad}. Tu nuevo saldo es $${cuenta.saldo}`);
}

function retirarDinero(cuenta) {
    const cantidad = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));
    if (isNaN(cantidad)) {
    alert("Por favor ingresa una cantidad válida.");
    return;
    }
    if (cantidad > cuenta.saldo) {
    alert("Fondos insuficientes.");
    return;
    }
    cuenta.saldo -= cantidad;
    cuenta.registrarMovimiento("Retiro", cantidad);
    alert(`Has retirado $${cantidad}. Tu nuevo saldo es $${cuenta.saldo}`);
}


function iniciarATM() {
    let operacion;

    do {
    operacion = prompt(menuOperaciones.mostrar() + "Elige el número de la operación que deseas realizar:");
    
    switch(operacion) {
        case "1":
        cuentaUsuario.mostrarSaldo();
        break;
        case "2":
        ingresarDinero(cuentaUsuario);
        break;
        case "3":
        retirarDinero(cuentaUsuario);
        break;
        case "4":
        case null:
        alert("Gracias por usar nuestro servicio. ¡Hasta pronto!");

        console.log("Historial de movimientos:", cuentaUsuario.movimientos);
        break;
        default:
        alert("Operación no válida. Por favor elige una opción del menú.");
    }
    } while (operacion !== "4" && operacion !== null);
}


iniciarATM();




