const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient

mongoose.Promise = global.Promise

const dbUrl = process.env.MONGODB_URL || 'mongodb://localhost/nodepop'

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a la base de datos')
}).catch(err => {
  console.error(`Error connecting to database: ${err}`)
})

const db = mongoose.connection
module.exports = db
