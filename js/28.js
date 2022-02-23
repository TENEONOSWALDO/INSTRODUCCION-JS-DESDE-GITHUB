
// CLASES

class Producto {
    constructor (nombre, precio ) {
        this.nombre = nombre ;
        this.precio = precio ;
    }
    formatearProducto(){
        return  `El Producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }
}

const producto2 = new Producto ('Monitor  curvo de 49"', 800) ;
const producto3 = new Producto ('Laptop',300);

//HERENCIA
class Libro {
    constructor(nombre, precio, isbn){
        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }
}
const libro = new Libro ('JavaScript la Revolucion', 120 , '910313981389139');

console.log (libro);
console.log(producto2);
console.log(producto3);