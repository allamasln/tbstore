const express = require('express')
const app = express()

require('./startup/routes')(app)
require('./startup/db')()

const port = process.env.PORT || 3001
const server = app.listen(port, () => console.info(`Listening on ${port}...`))

module.exports = server
