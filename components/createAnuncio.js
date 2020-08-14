const Anuncio = require('../models/anuncio')

exports.create = (req, res) => {
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