// Forma de utilizar el Async await de forma parelela,
// en donde usas los ECMAscript Modules para ejecutarlo,
// cambiando el nombre de la extension por ".msj", esta es
// la forma en la que se consumen menos recursos.

import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log(text)
  console.log(secondText)
})
