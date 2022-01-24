"use strict";//Correr JS en modo estricto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
    }

Object.freeze(producto); //Frezze no permiter agreagarle nuevas propiedades, ni que el objeto
   // producto.imagen = 'imagen.jpg';
console.log(Object.isFrozen(producto)) ;
    console.log(producto) ;