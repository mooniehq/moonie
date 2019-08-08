const dbConfig = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: 'moonie',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    underscored: true
  }
}

module.exports = { dbConfig }
