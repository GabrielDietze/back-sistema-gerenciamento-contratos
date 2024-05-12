const express = require('express');
const ContratoController = require('../controllers/ContratoController.js');
const router = express.Router();

router.get('/', ContratoController.indexAll);
router.get('/:id', ContratoController.index);
router.post('/', ContratoController.store);
router.put('/:id', ContratoController.update);
router.delete('/:id', ContratoController.delete);

module.exports = router;