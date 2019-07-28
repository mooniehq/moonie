const bodyParser = require('body-parser');
const express = require('express');

const router = express.Router();

router.use(bodyParser.json());

let testMessage = 'Hello, World!';

router.get('/api/test', (req, res) => {
  res.send(testMessage);
});

router.post('/api/test', (req, res) => {
  const { message } = req.body;
  testMessage = message;
  res.send({ message: 'Thanks!' });
});

module.exports = router;