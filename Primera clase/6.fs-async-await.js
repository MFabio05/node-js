// Esta es la manera en la que ejecutas codigo asincrono con async
// await de manera en donde utilices un require y no tengas que recurrir
// a ECMAscript Modules y tengas que cambiar la extension del archivo,
// igual es recomendado usar los modulos en vez del require.

const { readFile } = require('node:fs/promises')

;( // IIFE - Inmediatly Involved Function Expression
  async () => {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer archivo =====> ', text)

    console.log('Hacer cosas mientras lee el archivo')

    console.log('Leyendo el segundo archivo...')
    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log('Primer archivo =====> ', text2)
  }
)()
