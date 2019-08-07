const functions = require('firebase-functions')

function getFirebaseConfig(key) {
  return functions.config()[key]
}
const dbConfig = {
  username: process.env.DB_USERNAME || functions.config().db.username,
  password: process.env.DB_PASSWORD || functions.config().db.password,
  database: 'moonie',
  host: process.env.DB_HOST || functions.config().db.host,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

module.exports = { dbConfig }
