const express = require('express');
const router = express.Router();
const controller = require('../controllers/formController');
const validator = require('../validations/formValidator');

router.get('/', controller.index);
router.post('/', validator, controller.processForm);
router.get('/confirm', controller.confirm);
router.get('/olvidar', controller.forget);


module.exports = router