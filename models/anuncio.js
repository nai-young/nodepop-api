const mongoose = require('mongoose')

const anuncioSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  venta: {
    type: Boolean
  },
  precio: {
    type: Number
  },
  foto: {
    type: String
  },
  tags: {
    type: Array
  }
})

module.exports = mongoose.model('Anuncio', anuncioSchema)
