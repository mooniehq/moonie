require('dotenv').config()

const express = require('express')
const next = require('next')
const test = require('./api/test')
// const { sequelize } = require('./models')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

const port = process.env.PORT || 3000

// sequelize.sync().then(() => {
app.prepare().then(() => {
  server.use(test)
  // handling everything else with Next.js
  server.get('*', handle)
  server.listen(port, err => {
    if (err) throw err
    console.log(`Listening on port ${process.env.PORT}`)
  })
})
// })

module.exports = { server }
