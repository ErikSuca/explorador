const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/home', controller.index);
router.get('/datos', controller.datosGET);    

router.post('/datos', controller.datos);
module.exports = router;

