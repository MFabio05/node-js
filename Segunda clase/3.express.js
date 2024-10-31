const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()

const PORT = process.env.PORT ?? 1239
app.disable('x-powered-by')

// Esta linea de codigo hace basicamente todo lo que hiciste abajo de ella que esta comentado
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.header['content-type'] !== 'application/json') return next()

//   let body = ''

//   // Escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // Mutar la request y meter la informacion en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // Con el req.body deberiamos de guardar en base de datos
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log('server listening on port http://localhost:1239')
})
