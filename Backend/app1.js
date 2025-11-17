const db = require('./db')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


//CREATE
app.post('/adicionar', (req, res) => {
    const { name, description, price, image_url, category, tags  } = req.body
    db.query('INSERT INTO person ( name, description, price, image_url, category, tags) VALUES ($1, $2, $3, $4, $5, $6)', [ name, description, price, image_url, category, tags ])
    .then(() => res.status(201).send('Camiseta inserido com sucesso!'))
    .catch((err) => res.status(500).send(err.stack))
})



app.get('/products', (req, res) => {
    
    db.query(`SELECT * FROM product ORDER BY ID`)
    .then((e) => {
        res.status(200).json(e.rows)
    })
    .catch((err) => res.status(500).json({error: err.stack}))
})

// READ CAT
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
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url, category, tags } = req.body;
    db.query('UPDATE person SET name = $1, description = $2, price = $3, image_url = $4,  category = $5,  tags = $6 WHERE id = $7', [name, description, price, image_url, category, tags, id])
    .then((result) => {
        if (result.rowCount === 0)
            return res.status(404).send('Camiseta não encontrada.');
        res.status(200).send('Registro atualizado com sucesso!');
    })
    .catch((err) => res.status(500).send(err.stack));
})

// // DELETE
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM person WHERE id = $1', [id])
    .then((result) => {
        if (result.rowCount == 0)
            return res.status(404).send('Camiseta não encontrado.');
        res.status(200).send('Camiseta deletado com sucesso!');
    })
    .catch((err) => res.status(500).send(err.stack));
})




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