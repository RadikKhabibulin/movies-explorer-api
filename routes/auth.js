const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  login, logout, createUser,
} = require('../controllers/users');

const authRouter = router;

authRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
}), login);
authRouter.get('/signout', logout);
authRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
  }),
}), createUser);

module.exports = authRouter;
