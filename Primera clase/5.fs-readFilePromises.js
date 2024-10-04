// ESTO SOLO EN LOS MODULOS DONDE NO TENGAN PROMESAS NATIVAS
// PARA QUE PUEDAS HACER USO DE LAS PROMESAS Y NO DE LOS CALLBACKS
// const { promisify } = require('node:util');
// const readFilePromises = promisify(fs.readFile);

// RESOLVIENDO LA ASINCRONIA CON PROMESAS.
const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => console.log('Primer texto: ', text))

console.log('Hacer algo mientras lee los archivos...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => console.log('Segundo texto: ', text))
