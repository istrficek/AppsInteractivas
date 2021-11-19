const express = require('express');
const router = express.Router();

const FileController = require('../../controllers/FileController');

router.post('/upload', FileController.uploadFile);
router.post('/uploadStudy', FileController.uploadStudyFile);

module.exports = router;