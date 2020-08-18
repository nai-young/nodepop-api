const express = require('express')
const router = express.Router()
const db = require('../config/connectMongoose')

router.get('/apiv1/anuncios', (req, res, next) => {
  const nombre = req.query.nombre
  const expresion = nombre ? { nombre: { $regex: new RegExp('^' + req.query.nombre), $options: 'i' } } : {}

  db.collection('anuncios').find(expresion).toArray((err, data) => {
    if (err) throw err
    res.send(data)
  })
})

module.exports = router
