const { json } = require('body-parser')
const { Router } = require('express')

const router = Router()

router.use(json())

// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    console.log(`Authenticated - user: ${JSON.stringify(req.user)}.`)
    return next()
  } else {
    // if they aren't redirect them to the home page
    res.status(401)
    res.send('Unauthorized')
  }
}

// router.use(isLoggedIn)

let testMessage = 'Hello, World!'

router.get('/api/test', isLoggedIn, (req, res) => {
  res.send(testMessage)
})

router.post('/api/test', isLoggedIn, (req, res) => {
  const { message } = req.body
  testMessage = message
  res.send({ message: 'Thanks!' })
})

module.exports = router
