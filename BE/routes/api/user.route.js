const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user');

router.post('/register', UserController.create);
router.post('/login', UserController.logIn);
router.get('/getAll', UserController.list);
router.get('/get/:id', UserController.get);

module.exports = router;

