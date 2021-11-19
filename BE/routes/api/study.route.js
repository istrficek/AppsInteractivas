const express = require('express');
const router = express.Router();

const StudyController = require('../../controllers/StudyController');

router.get('/getNext/:id', StudyController.getNextStudy);
router.get('/getHistory/:id', StudyController.getStudyHistory);
router.post('/result', StudyController.setStudyResult);
router.post('/new', StudyController.setNewStudy);

module.exports = router;