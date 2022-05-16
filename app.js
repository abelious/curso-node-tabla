
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const col = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
   .then ( nombreArchivo => console.log(col.random(nombreArchivo, 'creado')))
   .catch( err => console.log(err));



