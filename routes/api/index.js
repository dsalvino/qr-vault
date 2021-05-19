const router =  require('express').Router();
const userRoutes = require('./users');
const codeRoutes = require('./codes');
const signupRoutes = require('./signup');
const loginRoutes = require('./login');
const homeRoutes = require('./home');

router.use('/generate', homeRoutes);
router.use('/user',  userRoutes);
router.use('/qrcode', codeRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;