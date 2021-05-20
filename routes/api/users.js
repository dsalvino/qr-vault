const router = require('express').Router();
const userController = require('../../controllers/userController');

router
    .route('/')
    .get(userController.authentication)
    .post(userController.saveCode);

router
    .route('/:id')
    .get(userController.findOne);

router.route('/all').get(userController.findAll);
module.exports = router;