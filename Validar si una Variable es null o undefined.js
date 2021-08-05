let numero = undefined;

if (numero === undefined){
    console.log("(1)La varibale numero es undefined")
}

if (numero === null) {
    console.log("(2)La variable numero es null")
}

numero = null

if (numero === null) {
    console.log("(3)La variable numero es null")
}

// ! (bang) sirve para negar una operacion

if (!numero){
    console.log("(4)La variable numero es null")
}