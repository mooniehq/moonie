const getConfig = (key, defaultValue) => {
  return process.env[key] || defaultValue
}

const isDev = getConfig('NODE_ENV', '') !== 'production'

const port = getConfig('PORT', 3000)

const dbConfig = {
  username: getConfig('DB_USERNAME', 'postgres'),
  password: getConfig('DB_PASSWORD', 'root'),
  database: getConfig('DB_DATABASE', 'moonie'),
  host: getConfig('DB_HOST', 'localhost'),
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

module.exports = { isDev, port, dbConfig }
