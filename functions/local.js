// For local development

require('dotenv').config()
const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, err => {
  if (err) throw err
  console.log(`Please visit http://localtest.me:${port}`)
})
