const winston = require('winston')
module.exports = function (err, req, res, next) {
  winston.error('[500]', err)
  res
    .status(500)
    .send('El servidor no está disponible ahora mismo. Volveremos muy pronto. ')
}
