const router =  require('express').Router();
const userRoutes = require('./users');
// const codeRoutes = require('');

router.use('/user',  userRoutes);

module.exports = router;