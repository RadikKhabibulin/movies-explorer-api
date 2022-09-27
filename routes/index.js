const router = require('express').Router();

const auth = require('../middlewares/auth');

router.use('/', require('./auth'));
router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));
router.use('/', require('./pageNotFound'));

module.exports = router;
