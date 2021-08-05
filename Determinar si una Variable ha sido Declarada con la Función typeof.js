let a;
let b = 11;

console.group(typeof a);
console.group(typeof b);

console.log()

if( typeof a === "undefined") {
    console.log("La variable `a` no tiene asignado un valor")
} else {
    console.log("La variable `a` tiene asignado un valor")
}

console.log()

if( typeof b === "undefined") {
    console.log("La variable `b` no tiene asignado un valor")
} else {
    console.log("La variable `b` tiene asignado un valor")
}