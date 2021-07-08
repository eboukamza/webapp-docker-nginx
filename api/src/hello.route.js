const { Router } = require('express')

const helloRoute = Router()

helloRoute.get('/', (req, res) => {
  res.json({ message: 'hello!' })
})

module.exports = helloRoute
