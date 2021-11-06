const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user');

router.post('/register', UserController.create);
router.post('/login', UserController.logIn);
router.get('/get', UserController.list);

module.exports = router;

