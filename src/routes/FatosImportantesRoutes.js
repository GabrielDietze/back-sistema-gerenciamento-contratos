const express = require('express');
const FatosImportantesController = require('../controllers/FatosImportantesController.js');
const router = express.Router();

router.get('/', FatosImportantesController.indexAll);

router.get('/:id', (req, res) => {
  return res.send('FATOS IMPORTANTES DO CONTRATO COM ID: ' + req.params.id);
});

router.post('/', (req, res) => {
  return res.send('FATOS IMPORTANTES CRIADO');
});

router.put('/:id', (req, res) => {
  return res.send('FATOS IMPORTANTES ATUALIZADO COM ID: ' + req.params.id);
});

router.delete('/:id', (req, res) => {
  return res.send('FATOS IMPORTANTES DELETADO COM ID: ' + req.params.id);
});

module.exports = router;