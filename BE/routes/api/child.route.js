const express = require('express');
const router = express.Router();

const ChildController = require('../../controllers/ChildController');

router.get('/get', ChildController.getAll);

module.exports = router;