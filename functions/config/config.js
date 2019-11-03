const functions = require('firebase-functions')

const getConfig = (key, defaultValue) => {
  let config = process.env[key]
  if (config) {
    return config
  }
  // firebase
  try {
    config = functions.config().service[key.toLowerCase()]
  } catch (ignored) {

  }
  if (config) {
    return config
  }
  return defaultValue
}

const isDev = getConfig('NODE_ENV', '') !== 'production'

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
}

module.exports = { isDev, dbConfig, appConfig }
