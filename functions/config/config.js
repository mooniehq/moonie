const functions = require('firebase-functions')

function getConfig(key) {
  return process.env[key] || functions.config()[key]
}

const dbConfig = {
  username: getConfig('DB_USERNAME'),
  password: getConfig('DB_PASSWORD'),
  database: 'moonie',
  host: getConfig('DB_HOST'),
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

module.exports = { dbConfig }
