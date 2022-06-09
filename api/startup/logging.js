const winston = require('winston')
const {combine, colorize, prettyPrint, json, timestamp, printf} = winston.format
require('express-async-errors')

const transports = {
  console: new winston.transports.Console({
    level: 'info',
    format: combine(
      colorize(),
      prettyPrint(),
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      printf(info => `${info.timestamp}-${info.level}: ${info.message}`),
    ),
  }),
  file: new winston.transports.File({
    format: combine(json()),
    filename: 'logs/server.log',
    handleExceptions: true,
    handleRejections: true,
  }),
}

module.exports = function () {
  winston.add(transports.file)
  winston.add(transports.console)
}
