const express = require('express')

const router = express.Router()
const users = require('./api/user.route')

router.use('/users', users);
router.get('/', (_,res) => { res.send('Llegaste a la ruta API') });

module.exports = router;