const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/home', controller.index);
router.post('/datos', controller.datos);

module.exports = router;

