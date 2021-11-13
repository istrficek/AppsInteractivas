const BloodType = require('../models').blood_type

module.exports = {
    getAll() {
        return BloodType.findAll({});
    }
}