
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
const resultado = meses.includes('Marzo');
console.log(resultado);

//const resultado = meses.includes('Diciembre');
//console.log(resultado);