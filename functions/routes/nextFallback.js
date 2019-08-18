const { Router } = require('express')

module.exports = function (nextApp) {

  const router = Router()

  router.get('*', nextApp.getRequestHandler())

  return router
}
