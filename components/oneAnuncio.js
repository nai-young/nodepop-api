const Anuncio = require('../models/anuncio')

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
