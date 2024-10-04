const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:

const stats = fs.statSync('./archivo.txt') // el metodo statSync te da la informacion del archivo que desees de manera sincrona.

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
)
