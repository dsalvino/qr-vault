const router = require('express').Router();
const codeController = require('../../controllers/codeController');
const withAuth = require('../../utils/auth');

router
    .route('/')
    .get(codeController.findAll, withAuth)
    .post(codeController.generate, withAuth);

    router
    .route('/:id')
    .get(codeController.findOne, withAuth)
    .delete(codeController.remove, withAuth);

    module.exports = router;