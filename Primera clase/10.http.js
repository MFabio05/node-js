// Creando tu propio servidor nativo http sin dependencias.

const http = require('node:http') // require - http.

// Creas una constante que sera el servidor que reciba peticiones y arroje respuestas (req y res).
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo') // Asi es como terminarias el server con tu respuesta.
})

// Creas tu puerto en el cual recibiras tus peticiones y mandaras respuestas.
server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`) // Esto es para que siempre de un nuevo puerto aleatorio.
})
