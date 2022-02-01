//ADeclaracion de la funcion

//const sumar2 = function (n1, n2){// n1 y n2 parametros
//console.log( n1 + n2);
//}

//sumar2(5, 10);// 5 y 10 argumentos

//Arrows function

//const sumar2 = (n1, n2) => {// // n1 y n2 parametros
//console.log(n1 + n2);
//};
//
//sumar2(5, 10); // 5 y 10 argumentos

// Arrows function simplificada

//const sumar2 = (n1, n2) => console.log(n1 + n2); // n1 y //n2 parametros
//sumar2(5, 10); // 5 y 10 argumentos
//
//const aprendiendo = (tecnología) => console.log(`Aprendiendo ${tecnología}`) //Parametro = tecnologia
//
//
//aprendiendo('JavaScript');//Argumento JavaScript


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
//meses.forEach(mes => { 
//    console.log(mes);
//});

meses.forEach( mes => {  // EStructura de control
    if (mes=='Marzo') {
        console.log ('Marzo si existe');
    }
});

//includes
let resultado;
// Some ideal para arreglo de Objetos

    resultado = carrito.some(producto => producto.nombre === 'Celular PRO');
console.log(resultado);


//resultado = carrito.some(function(producto){
//   return producto.nombre === 'Celular PRO'
// })
// console.log(resultado);



//Reduce the resultado

resultado = carrito.reduce((total, producto) =>  total + producto.precio , 0);
console.log( resultado);


//resultado = carrito.reduce(function(total, producto){
//    return total + producto.precio
//} , 0);
////console.log( resultado);
//
//// Filter

resultado = carrito.filter (  producto => producto.precio > 400);


//resultado = carrito.filter ( function (producto){
//     return producto.precio > 400
//});
//
//console.log( resultado);

resultado = carrito.filter ( producto => producto.nombre  !=='Celular');
console.log( resultado);

//resultado = carrito.filter ( function (producto){
//    return producto.nombre  ==='Celular'
//});
//console.log( resultado);
//
//resultado = carrito.filter ( function (producto){
//    return producto.nombre  !=='Celular'
//});
//console.log( resultado);



//Arrows function del file 15.js

//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//  forEach
//meses.forEach( mes => 
//    console.log(mes)
//);


//meses.forEach( mes => {  // EStructura de control
//   if ( mes=='Marzo') {
//    console.log ('Marzo si existe');
//    }
//});
