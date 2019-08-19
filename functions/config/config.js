const functions = require('firebase-functions')

const isDev = process.env.NODE_ENV !== 'production'

const getConfig = (key, defaultValue) => {
  if (isDev) {
    return process.env[key] || defaultValue
  } else {
    return functions.config().service[key.toLowerCase()]
  }
}

const dbConfig = {
  username: getConfig('DB_USERNAME', 'postgres'),
  password: getConfig('DB_PASSWORD', 'root'),
  database: 'moonie',
  host: getConfig('DB_HOST', 'localhost'),
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

const appConfig = {
  baseDomain: getConfig('DOMAIN', 'localtest.me')
}

module.exports = { isDev, dbConfig, appConfig }
