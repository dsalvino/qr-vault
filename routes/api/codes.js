const router = require('express').Router();
const codeController = require('../../controllers/codeController');
const withAuth = require('../../utils/auth');

router
    .route('/')
    .get(codeController.findAll, withAuth)
    .post(codeController.call);

    router
    .route('/:id')
    .post(codeController.generate, withAuth)
    .get(codeController.findOne, withAuth)
    .delete(codeController.remove, withAuth);

    module.exports = router;