const cors = require('cors');

const options = {
  origin: [
    'https://portfolio.nomorepartiesxyz.ru',
    'http://portfolio.nomorepartiesxyz.ru',
    'http://localhost:3003',
    'http://127.0.0.1:3003',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = cors(options);
