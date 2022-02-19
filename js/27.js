
// Programacion Orientada a Objetos(POO)
// Object Literal
const producto = {
    nombre: 'table',
    precio: 500,
}

//Object Constructor

function Producto(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
}


const producto2 = new Producto('Monitor Curvo de 49plg ', 800);
const producto3 = new Producto('Laptop',300);
// CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO EN ESPECIFICO.


Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $  ${producto.precio }`;
} 
const cliente = new cliente ('Juan', 'De la torre');

console.log(cliente);

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $  ${producto.precio }`;
} 

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto()) ;
