const authRouter = require('express').Router();

const { login, logout, createUser } = require('../controllers/users');
const {
  signinValidator, signupValidator,
} = require('../validators/auth');

authRouter.post('/signin', signinValidator, login);
authRouter.get('/signout', logout);
authRouter.post('/signup', signupValidator, createUser);

module.exports = authRouter;
