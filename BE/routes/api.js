const express = require('express')

const router = express.Router()
const users = require('./api/user.route')
const child = require('./api/child.route')
const blood_type = require('./api/blood_type.route')
const file = require('./api/file.route')
const dashboard = require('./api/dashboard.route')
const check = require('./api/check.route')
const study = require('./api/study.route')
const vaccine = require('./api/vaccine.route')

router.use('/users', users);
router.use('/child', child);
router.use('/blood-type', blood_type);
router.use('/file', file)
router.use('/dashboard', dashboard)
router.use('/check', check)
router.use('/study', study)
router.use('/vaccine', vaccine)
router.get('/', (_,res) => { res.send('Llegaste a la ruta API') });

module.exports = router;