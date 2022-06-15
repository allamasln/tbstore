const winston = require('winston')
const mongoose = require('mongoose')

module.exports = function () {
  const db = process.env.MONGO_URI

  mongoose.connect(db).then(() => winston.info(`Connected to db...`))
}
