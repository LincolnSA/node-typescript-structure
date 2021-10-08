import express from 'express'

const server = express()
const port = 3000

server.get('/', (req, res) => {
    return res.send("Servidor rodando ok!")
})

server.listen(port, () => console.log(`Server on http://localhost:${port}`))