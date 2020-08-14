const Anuncio = require('../models/anuncio')
const nombre = req.body.nombre
const expression = nombre ? { nombre: { $regex: new RegExp(nombre), $options: 'i' } } : {}

exports.allAnuncios = (req, res) => {
  Anuncio.find(expression)
    .then(res => { res.send(res) })
    .catch(err => { res.send(err) })
}
