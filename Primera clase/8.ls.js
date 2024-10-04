// Nueva propiedad "readdir" que sirve para leer directorios,
// en este ejercicio creas un comando ls desde el codigo.

const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error al leer el directorio: ', err)
    return
  }
  files.forEach(file => {
    console.log(file)
  })
})

console.log(process.argv[1])
