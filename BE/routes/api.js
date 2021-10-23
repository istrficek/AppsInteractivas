var express = require('express')

var router = express.Router()
//var users = require('./api/user.route')

router.get('/', (_,res) => { res.send('Llegaste a la ruta API') });

module.exports = router;