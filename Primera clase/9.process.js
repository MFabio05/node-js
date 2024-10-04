// argumentos de entrada
console.log(process.argv)

// controlar el prceso y su salida
// =====> con 0 todo ha ido bien
// =====> con 1 ha ocurrido un error
process.exit(0)

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// CWD Current Working Directory
// Nos dice desde que fichero estamos ejecutando el proceso.
console.log(process.cwd())

// plataform
console.log(process.env.BACKEND)
