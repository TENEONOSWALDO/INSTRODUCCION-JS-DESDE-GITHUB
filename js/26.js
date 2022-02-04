

//This function

const reservacion ={
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`);
    }
}
console.log (reservacion.informacion());