const express = require('express')
const next = require('next')

const test = require('./api/test') // for quick test
const question = require('./api/question')
const community = require('./api/community')

const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
// initalize sequelize with session store
var SequelizeStore = require('connect-session-sequelize')(session.Store)
const healthcheck = require('express-healthcheck')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')

const configPassport = require('./config/passport')
const { sequelize } = require('./models')

const auth = require('./api/auth')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

var sessionStore = new SequelizeStore({
  db: sequelize
})

sessionStore.sync({ alter: true }).then(() => {
  app.prepare().then(() => {
    // allow static file
    server.use('/css', express.static('css'))

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
    server.use(session({
      secret: 'ilovescotchscotchyscotchscotch',
      store: sessionStore,
      saveUninitialized: false,
      resave: false,
      proxy: true
    })) // session secret
    server.use(passport.initialize())
    server.use(passport.session()) // persistent login sessions
    server.use(flash()) // use connect-flash for flash messages stored in session

    server.use(nextI18NextMiddleware(nextI18next))

    // authRouter.use(nocache())
    server.use(community)

    server.use(auth(passport))

    server.use(test)
    server.use(question)

    // handling everything else with Next.js
    server.get('*', handle)
  })
}).catch(err => {
  console.log(err)
})

module.exports = server
