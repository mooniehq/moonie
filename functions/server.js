const express = require('express')
const next = require('next')

const test = require('./routes/test') // for quick test
const question = require('./routes/question')
const community = require('./routes/community')
const auth = require('./routes/auth')
const nextFallback = require('./routes/nextFallback')

const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const healthcheck = require('express-healthcheck')

const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')

const configPassport = require('./config/passport')
const { sequelize } = require('./models')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

const server = express()

const sessionStore = new SequelizeStore({
  db: sequelize
})

sessionStore.sync({ alter: true }).then(() => {
  nextApp.prepare().then(() => {
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
    server.use(test)
    server.use(auth(passport))
    server.use(community(nextApp))
    server.use(question(nextApp))
    server.use(nextFallback(nextApp))
  })
}).catch(err => {
  console.log(err)
})

module.exports = server
