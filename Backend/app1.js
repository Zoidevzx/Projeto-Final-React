const db = require('./db')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


// CREATE
// app.post('/person', (req, res) => {
//     const { nome, idade, sexo } = req.body
//     db.query('INSERT INTO person ( nome, idade, sexo) VALUES ($1, $2, $3)', [ nome, idade, sexo ])
//     .then(() => res.status(201).send('Registro inserido com sucesso!'))
//     .catch((err) => res.status(500).send(err.stack))
// })

// READ
app.get('/products/:cat', (req, res) => {
    const cat = req.params.cat
    db.query(`SELECT * FROM product WHERE category = '${cat}' ORDER BY ID`)
    .then((e) => {
        res.status(200).json(e.rows)
    })
    .catch((err) => res.status(500).json({error: err.stack}))
})


// const { id } = req.params
//     let cat = 'Classic'
//     if (id === '2')
//        cat = 'New'
//     else if (id === '3')
//        cat = 'Moderno' 
// // UPDATE
// app.put('/person/:id', (req, res) => {
//     const { id } = req.params;
//     const { nome, idade, sexo } = req.body;
//     db.query('UPDATE person SET nome = $1, idade = $2, sexo = $3 WHERE id = $4', [nome, idade, sexo, id])
//     .then((result) => {
//         if (result.rowCount === 0)
//             return res.status(404).send('Pessoa não encontrada.');
//         res.status(200).send('Registro atualizado com sucesso!');
//     })
//     .catch((err) => res.status(500).send(err.stack));
// })

// // DELETE
// app.delete('/person/:id', (req, res) => {
//     const { id } = req.params;
//     db.query('DELETE FROM person WHERE id = $1', [id])
//     .then((result) => {
//         if (result.rowCount == 0)
//             return res.status(404).send('Pessoa não encontrado.');
//         res.status(200).send('Pessoa deletado com sucesso!');
//     })
//     .catch((err) => res.status(500).send(err.stack));
// })




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