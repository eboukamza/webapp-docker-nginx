const express = require('express')
const bodyParser = require('body-parser')

const helloRoute = require('./hello.route')

const app = express()
app.use(bodyParser.json())

app.use('/api/hello', helloRoute)

module.exports = app
