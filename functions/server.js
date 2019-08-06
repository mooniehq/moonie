const express = require('express')
const next = require('next')
const test = require('./api/test')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const healthcheck = require('express-healthcheck')

const configPassport = require('./config/passport')
const { sequelize } = require('./models')

const authRoute = require('./api/auth-route.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

sequelize.sync().then(() => {
  app.prepare().then(() => {
    // set up our express application
    server.use(morgan('dev')) // log every request to the console
    server.use(cookieParser()) // read cookies (needed for auth)
    server.use(bodyParser({
      extended: true
    })) // get information from html forms

    // healthcheck
    server.use('/healthcheck', healthcheck())

    // required for passport
    configPassport(passport) // pass passport for configuration
    server.use(session({ secret: 'ilovescotchscotchyscotchscotch' })) // session secret
    server.use(passport.initialize())
    server.use(passport.session()) // persistent login sessions
    server.use(flash()) // use connect-flash for flash messages stored in session

    // load our routes and pass in our app and fully configured passport
    const authRouter = authRoute(server, passport)
    // authRouter.use(nocache())
    server.use(authRouter)

    server.use(test)
    // handling everything else with Next.js
    server.get('*', handle)
  })
})

module.exports = server
