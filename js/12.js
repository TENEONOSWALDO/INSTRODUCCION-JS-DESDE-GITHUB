"use strict";//Correr JS en modo estrict
//Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
    }

Object.seal(producto); //Frezze no permiter agreagarle nuevas propiedades, ni que el objeto
   // producto.imagen = 'imagen.jpg';
producto.precio = 'NUEVO PRECIO' ;

console.log(Object.isFrozen(producto)) ;
    console.log(producto) ;

 delete producto.precio ;   
 console.log(producto) ;