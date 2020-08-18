const mongoose = require('mongoose')
const Schema = mongoose.Schema

const anuncioSchema = new Schema({
  nombre: String,
  venta: String,
  precio: Number,
  foto: String,
  tags: [String]
})

module.exports = mongoose.model('Anuncio', anuncioSchema)
