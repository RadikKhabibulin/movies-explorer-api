require('dotenv').config();

const {
  NODE_ENV,
  MONGO_DB_PATH = 'mongodb://localhost:27017/moviesdb',
  PORT = 3002,
  JWT_SECRET,
} = process.env;

module.exports = {
  NODE_ENV,
  MONGO_DB_PATH,
  PORT,
  JWT_SECRET,
};
