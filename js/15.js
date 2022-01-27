
// Array Methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
{ nombre : 'Monitor 20 Pulgadas', precio: 500 },
{ nombre : 'Television 50 Pulgadas', precio: 700 },
{ nombre : 'Tablet', precio: 300 },
{ nombre : 'Audifonos', precio: 200 },
{ nombre : 'Teclado', precio: 50 },
{ nombre : 'Celular', precio:  500 },
{ nombre : 'Bocinas', precio: 300 },
{ nombre : 'Laptop', precio: 800 },
];
//  forEach
meses.forEach(function(mes) { 
    console.log(mes);
});

meses.forEach(function(mes) {  // EStructura de control
    if ( mes=='Marzo') {
        console.log ('Marzo si existe');
    }
});

//includes
//consoleconst resultado = meses.includes('Marzo');
//console.log(resultado);

let resultado = meses.includes('Diciembre');// Se emplea cuando es un arreglo plano
const resultado2 = carrito.includes('Celular');
console.log(resultado);
console.log(resultado2);// Celular si existe  y pone false

// Sonbe para arreglo de Objetos

    resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})
console.log(resultado);

//Reduce the resultado

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
} , 0);
console.log( resultado);

