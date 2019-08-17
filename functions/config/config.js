const functions = require('firebase-functions')

function getConfig (key) {
  return process.env[key] || functions.config().service[key.toLowerCase()]
}

const dbConfig = {
  username: 'postgres' || getConfig('DB_USERNAME'),
  password: 'Password1' || getConfig('DB_PASSWORD'),
  database: 'moonie',
  host: 'localhost' || getConfig('DB_HOST'),
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

module.exports = { dbConfig }
