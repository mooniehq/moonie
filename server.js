import express from 'express'
import { createServer } from 'http'
import next from 'next'
import test from './api/test'

import { sequelize } from './models'

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

sequelize.sync().then(function () {
  app.prepare().then(function () {
    const server = express()
    server.use(test)
    // handling everything else with Next.js
    server.get('*', handle)

    const port = process.env.PORT || 3000
    createServer(server).listen(port, err => {
      if (err) throw err
      console.log(`Listening on port ${process.env.PORT}`)
    })
  })
})
