// Utilizando el generador de servidores NET que creamos en el archivo free-port.js

const http = require('node:http')
const { findAvailablePort } = require('./11.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
