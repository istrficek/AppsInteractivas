const express = require('express');
const router = express.Router();

const BloodTypeController = require('../../controllers/BloodTypeController');

router.get('/get', BloodTypeController.getAll);

module.exports = router;