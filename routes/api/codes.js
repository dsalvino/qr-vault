const router = require('express').Router();
const codeController = require('../../controllers/codeController');

router
    .route('/')
    .get(codeController.findAll)
    .post(codeController.generate);

    router
    .route('/:id')
    .get(codeController.findOne)
    .delete(codeController.remove);

    module.exports = router;