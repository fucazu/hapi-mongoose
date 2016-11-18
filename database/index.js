const mongoose = require('mongoose')
const configs = require('../config')
mongoose.Promise = Promise

mongoose.connect(configs.dbPath)

mongoose.connection.on('connected', function (err) {
  if (err) throw console.log('err: ', err)
  console.log('conectou no banco')
})

mongoose.connection.on('error', function (err) {
  console.log('err: ', err)
})

module.exports = mongoose
