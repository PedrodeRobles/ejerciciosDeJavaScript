console.log("JavaScript es tremendo!")

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("Pedro");

setTimeout(()=> {
    console.log(`Este texto se mostrara pasados 5 segundos`, 5000);
});

console.log(`Fin!`);