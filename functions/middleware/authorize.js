// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {
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

module.exports = { isLoggedIn }
