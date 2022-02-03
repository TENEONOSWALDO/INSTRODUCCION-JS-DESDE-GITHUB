

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Television 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 }
    ];


  // forEach . Se ejecuta cada vez que hay un elemeto en el arreglo

//carrito.forEach(function(producto) {
//    console.log(producto.nombre)
//});

//carrito.forEach(producto=>console.log (producto.nombre));//Mostrar los elementos en pantalla



  //map Crea  un nuevo arreglo
//carrito.map( producto => console.log(producto.nombre));//Mostrar un nuevo arreglo.

//ForEach

const arreglo1 = carrito.forEach (producto => producto.nombre);

const arreglo2 = carrito.map (producto => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);