const config = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: 'moonie',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    freezeTableName: true,
    underscored: true
  }
};

const configs = {
  development: config,
  test: config,
  production: config
};

module.exports = configs;