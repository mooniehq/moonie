const { Router } = require('express')

module.exports = (nextApp) => {

  const router = Router()

  router.get('*', nextApp.getRequestHandler())

  return router
}
