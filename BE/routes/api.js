const express = require('express')

const router = express.Router()
const users = require('./api/user.route')
const child = require('./api/child.route')

router.use('/users', users);
router.use('/child', child)
router.get('/', (_,res) => { res.send('Llegaste a la ruta API') });

module.exports = router;