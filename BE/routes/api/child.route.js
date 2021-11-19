const express = require('express');
const router = express.Router();

const ChildController = require('../../controllers/ChildController');

router.get('/get', ChildController.getAll);
router.get('/get/:id', ChildController.getSons);
router.post('/new', ChildController.addChild);

module.exports = router;