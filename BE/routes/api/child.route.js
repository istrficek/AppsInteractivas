const express = require('express');
const router = express.Router();

const ChildController = require('../../controllers/ChildController');

router.get('/get', ChildController.getAll);
router.get('/get/:id', ChildController.getSons);

module.exports = router;