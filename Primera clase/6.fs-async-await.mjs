// Esta manera de usar el async await es valida solo con
// los ECMAscript Modules, que es cuando cambiamos la
// extension de ".js" por ".mjs".

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('Primer archivo =====> ', text)

console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('Primer archivo =====> ', text2)
