const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/')
    .get(userController.dashboard)
    .post(userController.signup)
    .post(userController.login)
    .post(userController.logout);

    module.exports = router;