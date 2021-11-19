const express = require('express');
const router = express.Router();

const VaccineController = require('../../controllers/VaccineController');

router.get('/getNext/:id', VaccineController.getNextVaccine);
router.get('/getHistory/:id', VaccineController.getVaccineHistory);
router.get('/result/:id', VaccineController.setVaccineResult);
router.post('/new', VaccineController.setNewVaccine);
router.get('/recommendations/:id', VaccineController.getRecomendations);

module.exports = router;