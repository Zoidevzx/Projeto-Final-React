const db = require('./db')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


//CREATE
app.post('/add', (req, res) => {
  const { name, description, price, image_url, category, tags } = req.body
  db.query('INSERT INTO product ( name, description, price, image_url, category, tags) VALUES ($1, $2, $3, $4, $5, $6)', [name, description, price, image_url, category, tags])
    .then(() => res.status(201).send('Camiseta inserida com sucesso!'))
    .catch((err) => res.status(500).send(err.stack))
})

app.get('/product/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const lastRow = await db.query(`SELECT MAX(id) AS max_id FROM product`);
    const lastId = lastRow.rows[0].max_id;

    let ids = [];

    if (id === 1) {
      ids = [id, id + 1, id + 2];
    } else if (id === lastId) {
      ids = [id, id - 1, id - 2];
    } else {
      ids = [id - 1, id, id + 1];
    }

    const result = await db.query(
      `SELECT * 
       FROM product 
       WHERE id = ANY($1::int[]) 
       ORDER BY CASE 
         WHEN id = $2 THEN 0 
         ELSE 1 
       END, id`,
      [ids, id]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
});



app.get('/products', (req, res) => {

  db.query(`SELECT * FROM product ORDER BY ID`)
    .then((e) => {
      res.status(200).json(e.rows)
    })
    .catch((err) => res.status(500).json({ error: err.stack }))
})

app.get('/products/tags/:tag', (req, res) => {
  const tag = req.params.tag
  db.query(`SELECT * FROM product WHERE tags = $1 ORDER BY ID`, [tag])
    .then((e) => {
      res.status(200).json(e.rows)
    })
    .catch((err) => res.status(500).json({ error: err.stack }))
})


app.get('/products/categories/:cat', (req, res) => {
  const cat = req.params.cat
  db.query(`SELECT * FROM product WHERE category = $1 ORDER BY ID`, [cat])
    .then((e) => {
      res.status(200).json(e.rows)
    })
    .catch((err) => res.status(500).json({ error: err.stack }))
})

// UPDATE
app.put('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price, image_url, category, tags } = req.body;
  db.query('UPDATE product SET name = $1, description = $2, price = $3, image_url = $4,  category = $5,  tags = $6 WHERE id = $7', [name, description, price, image_url, category, tags, id])
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
  db.query('DELETE FROM product WHERE id = $1', [id])
    .then((result) => {
      if (result.rowCount == 0)
        return res.status(404).send('Camiseta não encontrado.');
      res.status(200).send('Camiseta deletada com sucesso!');
    })
    .catch((err) => res.status(500).send(err.stack));
})


//CREATE CARRINHO

app.post('/add/cart', (req, res) => {
  const { carrinho } = req.body

  const somaFinal = carrinho.reduce((soma, item) => soma + item.preco, 0);

  db.query('INSERT INTO sale (finalprice) VALUES ($1)', [somaFinal])
    .then(() => res.status(201).send('Venda inserida com sucesso!'))
    .catch((err) => res.status(500).send(err.stack))
})


//Callback

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

//criar uma tabela onde tenha o ID do produto e o preço dele, no final fazer uma somatória de todos os preços(reduce)

