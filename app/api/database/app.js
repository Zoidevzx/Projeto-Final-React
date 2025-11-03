const db = require('./db')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const server = app.listen(8000, () => {
    console.log('Conectando com servidor...')
})
const shutdown = async () => {
    console.log('\nEncerrando servidor...')
    server.close()
    await db.end()
    console.log('Conexões encerradas com sucesso.')
    process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)