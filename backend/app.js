const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const Livro = require('./models/livro')
const env = require('./env')
const livro = require('./models/livro')

const dbName = "db_livros";

//trocar string
mongoose.connect(`mongodb+srv://fatec_ipi_20211_paoo:${env.mongoPassword}@cluster0.asdpx.mongodb.net/${dbName}?retryWrites=true&w=majority`,
{ useNewUrlParser: true })
.then(() => console.log('MongoDB: Conexao OK'))
.catch(() => console.log('MongoDB: Conexao NOK'))

app.use(express.json())
app.use(cors())

const livros = [
  {
    id: "1",
    titulo: "Livro 1",
    autor: "Autor 1",
    numero_paginas: "100"
  },
  {
    id: "2",
    titulo: "Livro 2",
    autor: "Autor 2",
    numero_paginas: "200"
  }
]


app.post("/api/livros", (req, res, next) => {
  const livro = new Livro ({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    numero_paginas: req.body.numero_paginas
  })
  livro.save();
  res.status(201).json({mensagem: 'Livro inserido'})
})

app.get("/api/livros", (req, res, next) => {
  livro.find().then(documents => {
    res.status(200).json({
      mensagem: "Tudo OK",
      livros: documents
    })
  })
})

module.exports = app;
