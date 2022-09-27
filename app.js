const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const limiter = require('./middlewares/rateLimiter');

const router = require('./routes/index');
const { PORT, MONGO_DB_PATH } = require('./constants');
const corsHandler = require('./middlewares/corsHandler');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

mongoose.connect(MONGO_DB_PATH, {
  useNewUrlParser: true,
});

const app = express();

app.use(limiter);
app.use(helmet());
app.use(corsHandler);
app.use(cookieParser());
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
