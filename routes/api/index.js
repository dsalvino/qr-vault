const router =  require('express').Router();
const userRoutes = require('./users');
const codeRoutes = require('./codes');

router.use('/user',  userRoutes);
router.use('/qrcode', codeRoutes);

module.exports = router;