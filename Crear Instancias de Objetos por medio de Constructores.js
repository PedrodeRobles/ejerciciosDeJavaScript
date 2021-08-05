"JavaScript" // "JavaScript"
// Es igual que escribir :
new String("JavaScript");

[2, 3, 5, 7, 11];
// Es lo mismo que escribir;
new Array(2, 3 ,5 ,7 ,11);

function sumar(a, b) {
    return a + b;
}
//Es lo mismo que:
let sumarFn = new Function("a", "b", "return a + b");

let persona = {id: 1, nombre: "Juan"};
// Es lo mismo que:
persona = new Object();
persona.id = 1;
persona.nombre = "Juan"; 