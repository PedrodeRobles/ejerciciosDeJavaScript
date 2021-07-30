// console.log(mensaje);  ReferenceError

function mostrarSaludo() {
    var mensaje = "Hola... Este codigo se ejecuta en una funcion";
    console.log(mensaje);
}

// console.log(mensaje);  ReferenceError

var numero = 7;

function mostrarNumero() {
    console.log("El numero es: " + numero)
}

mostrarNumero();