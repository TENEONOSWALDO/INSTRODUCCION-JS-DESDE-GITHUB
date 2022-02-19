
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

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $  ${producto.precio }`;
} 
console.log(producto2);
console.log(producto3);


console.log ( formatearProducto(producto2));