require('dotenv').config();

const express = require('express');
const { createServer } = require('http');
const next = require('next');
const test = require('./api/test');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const db = require('./models');

db.sequelize.sync().then(function () {
  app.prepare().then(function () {
    const server = express();
    server.use(test);
    // handling everything else with Next.js
    server.get('*', handle);

    const port = process.env.PORT || 3000;
    createServer(server).listen(port, err => {
      if (err) throw err;
      console.log(`Listening on port ${process.env.PORT}`);
    });
  });
});