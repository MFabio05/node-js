// UTILIZANDO LA ASINCRONIA RESOLVIENDOLA CON CALLBACKS.

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) console.log(err)
  console.log(text)
})

console.log('Hacer algo mientras lee los archivos...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) console.log(err)
  console.log(text)
})
