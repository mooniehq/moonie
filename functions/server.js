const express = require('express')
const next = require('next')

const { isDev } = require('./config/config')

const { lookUpCommunity } = require('./middleware/community')

const answerApi = require('./routes/answer-api')
const auth = require('./routes/auth')
const commentApi = require('./routes/comment-api')
const community = require('./routes/community')
const communityApi = require('./routes/community-api')
const home = require('./routes/home')
const nextFallback = require('./routes/nextFallback')
const question = require('./routes/question')
const questionApi = require('./routes/question-api')
const test = require('./routes/test') // for quick test

const passport = require('passport')

const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const healthcheck = require('express-healthcheck')

const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')

const configPassport = require('./config/passport')
const { sequelize } = require('./models')

const nextApp = next({ dev: isDev })

const sessionStore = new SequelizeStore({
  db: sequelize
})

const server = express()
if (!isDev) {
  server.set('trust proxy', true)
}

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
  name: '__session',
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

server.use((err, req, res, next) => {
  // https://expressjs.com/en/guide/error-handling.html
  // If you call next() with an error after you have started writing the response
  // (for example, if you encounter an error while streaming the response to the client)
  // the Express default error handler closes the connection and fails the request.
  // So when you add a custom error handler, you must delegate to the default Express error handler,
  // when the headers have already been sent to the client.
  console.error(`${req.originalUrl} ${err}`)
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

server.use(lookUpCommunity)

const migrate = () => {
  sequelize.sync({ alter: true }).then(() => {
    return sessionStore.sync({ alter: true })
  }).catch(err => {
    console.log(err)
  })
}

nextApp.prepare().then(() => {

  server.use(answerApi)
  server.use(auth(passport, nextApp))
  server.use(commentApi)
  server.use(community(nextApp))
  server.use(communityApi)
  server.use(home(nextApp))
  server.use(question(nextApp))
  server.use(questionApi)
  server.use(test)

  if (isDev) {
    server.get('/api/migrate', (req, res) => {
      migrate()
      return res.send('OK')
    })
  }

  server.use(nextFallback(nextApp))
})

if (!isDev) {
  migrate()
}

module.exports = server
