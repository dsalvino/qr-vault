const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/')
    .get(userController.dashboard)
    .post(userController.signup);

    module.exports = router;