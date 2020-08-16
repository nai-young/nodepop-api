const Anuncio = require('../models/anuncio')

exports.allAnuncios = (req, res) => {
  const Anuncio = require('../models/anuncio')
  const nombre = req.body.nombre
  const expresion = nombre ? { nombre: { $regex: new RegExp(nombre), $options: 'i' } } : {}

  Anuncio.find(expresion)
    .then(res => { res.send(res) })
    .catch(err => { res.send(err) })
}

exports.creaAnuncio = (req, res) => {
  const anuncio = new Anuncio({
    nombre: req.body.nombre,
    venta: req.body.venta,
    precio: req.body.precio,
    foto: req.body.foto,
    tags: req.body.tags
  })

  anuncio.save()
    .then(() => {
      console.log('Anuncio guardado correctamente')
    })
    .catch(err => {
      console.log('Error al guardar anuncio: ', err)
    })
}
exports.oneAnuncio = (req, res) => {
  const id = req.params.id
  Anuncio.findById(id)
    .then((res) => {
      if (!res) {
        res.send('No se ha encontrado ningun anuncio')
      }
      res.send(res)
    })
    .catch(err => { res.send(err) })
}
