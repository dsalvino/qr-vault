const router = require('express').Router();
const codeController = require('../../controllers/codeController');

router
    .route('/')
    .post(codeController.call);

module.exports = router;