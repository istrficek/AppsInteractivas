const express = require('express');
const router = express.Router();

const CheckController = require('../../controllers/CheckController');

router.get('/getNext/:id', CheckController.getNextCheck);
router.get('/getHistory/:id', CheckController.getCheckHistory);
router.post('/result', CheckController.setCheckResult);
router.post('/new', CheckController.setNewCheck);

module.exports = router;