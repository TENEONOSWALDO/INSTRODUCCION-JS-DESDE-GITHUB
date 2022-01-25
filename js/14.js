//Arreglos o Arrays

const numeros = [10,20,30,40,50 ];
console.log(numeros);
console.table(numeros);

//const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Jul');
//console.table(meses);//Constructor

const meses =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Jul'] ;
console.table(meses);

//const arreglo =[ "Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]] ;
//console.table(arreglo);
//console.log(arreglo);

// Acceder a los valores de un arreglo

//console.log(arreglo[4])

//Conocer la cantidad de elementos que tiene un arreglo

//onsole.log(arreglo.length);
//console.log(meses.length);

//Iteradores la cantidad de elementos

//numeros.forEach(function(numero) {
//    console.log(numero);
//})

//meses.forEach(function(mes){
//    console.log(mes)
//})

//Metodos para los Arrays
//Como agregar un elemento al final de un arrreglo
numeros[5] = 60;
numeros[3] = 60;
numeros[8] = 100 ;
// Push agrega un elemento o varios al final del arreglo

numeros.push(200, 300, 400);
//unshift agrega uno o varios elementos al inicio del arreglo
numeros.unshift(-10,-20, -30)

//Como eliminar elementos de un arreglo.
//.pop elimina al final de un arreglo.
meses.pop();

//.shift elimina elementos al inicio de un arreglo.
meses.shift();


// Con splice se eliminan elementos intermedios de un arreglo.

meses.splice(2,1)// LLega a la posicion 2 y elimina un solo elemento..
console.table(meses);
// Lo ideal es mantener el arreglo original y  crear un nuevo arreglo, creando o quitando elementos.

// Rest Operator o Spread Operator

const nuevoArreglo =  [ ...meses,'julio'];
console.table(nuevoArreglo);

