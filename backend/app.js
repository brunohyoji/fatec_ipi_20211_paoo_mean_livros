const express = require('express')
const cors = require('cors')
const app = express()
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
  const livros = req.body
  res.status(201).json({mensagem: 'Livro inserido'})
})

app.use("/api/livros", (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    livros: livros
  })
})

module.exports = app;
