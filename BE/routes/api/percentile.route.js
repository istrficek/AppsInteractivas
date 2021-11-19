const express = require('express');
const router = express.Router();

const PercentileController = require('../../controllers/PercentileController');

router.get('/get/:id', PercentileController.getPercentiles);

module.exports = router;