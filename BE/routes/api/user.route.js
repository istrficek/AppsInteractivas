const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user');

router.post('/register', UserController.create);
router.post('/login', UserController.logIn);
router.get('/getAll', UserController.list);
router.get('/get/:id', UserController.get);
router.post('/updatePicture', UserController.updateImage);
router.get('/getByDNI/:dni', UserController.getByDNI);

module.exports = router;

