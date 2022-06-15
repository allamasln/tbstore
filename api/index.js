const winston = require('winston')
const express = require('express')
const app = express()
const {version} = require('./package.json')
require('dotenv').config()

require('./startup/logging')()
require('./startup/cors')(app)
require('./startup/routes')(app)
require('./startup/db')()

app.get('api/health', (req, res) => res.send('success'))
app.get('api/version', (req, res) => res.send(version))

const port = process.env.PORT || 3001
const server = app.listen(port, () => winston.info(`Listening on ${port}...`))

module.exports = server
