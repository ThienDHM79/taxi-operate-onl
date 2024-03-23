'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.get('/', controller.show);

module.exports = router;