const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/')
    .post(userController.login)
    .delete(userController.logout);

module.exports = router;