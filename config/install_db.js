const homeRoute = require('../routes/index')
const db = require('./connectMongoose')
const Anuncio = require('../models/anuncio')

// Cargamos el JSON de anuncios
const fs = require('fs')
const anuncios = JSON.parse(fs.readFileSync('anuncios.json', 'utf-8'))

// TODO promesas con async / await
db.once('open', () => {
  // Eliminar los anuncios anteriores en la db
  Anuncio.collection.deleteMany({})
    .then(() => {
      console.log('Registros de la base de datos eliminados.')
      // Inserta los anuncios del JSON
      Anuncio.collection.insertMany(anuncios.anuncios)
        .then(res => {
          console.log(`Se han insertado ${res.insertedCount} anuncios`)
        })
        .catch(err => {
          console.error(`Error al insertar los anuncios: ${err}`)
        })
    })
    .catch(err => {
      console.error(`Error al eliminar los anuncios: ${err}`)
    })
})
