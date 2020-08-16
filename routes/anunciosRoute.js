const anuncios = require('../components/anuncios')

module.exports = (app) => {
  const express = require('express')
  const router = express.Router()

  router.get('/anuncios', anuncios.allAnuncios)
  router.get('/:id', anuncios.oneAnuncio)
  router.post('/anuncios', anuncios.creaAnuncio)

  app.use('/apiv1', router)
}
