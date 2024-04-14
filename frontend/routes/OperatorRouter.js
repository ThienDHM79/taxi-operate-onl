'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/OperatorController');

router.get('/',controller.getData, controller.show);
router.post('/create',controller.create, controller.getData, controller.show);

module.exports = router;