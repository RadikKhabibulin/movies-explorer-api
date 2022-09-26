require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const pageNotFoundRouter = require('./routes/pageNotFound');
const auth = require('./middlewares/auth');
const corsHandler = require('./middlewares/corsHandler');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3002 } = process.env;

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

const app = express();

app.use(corsHandler);
app.use(cookieParser());
app.use(bodyParser.json());

app.use(requestLogger);

app.use('/', authRouter);
app.use('/users', auth, usersRouter);
app.use('/movies', auth, moviesRouter);
app.use('/', pageNotFoundRouter);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
