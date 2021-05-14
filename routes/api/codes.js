const router = require('express').Router();
const codeController = require('../../controllers/codeController');

router
    .route('/')
    .get(codeController.test)
    .post(codeController.generate);

    module.exports = router;