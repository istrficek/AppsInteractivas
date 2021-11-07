const Child = require('../models').child

module.exports = {
    getAll() {
        return Child.findAll({include: [{ all: true, nested: true }]})
    }
}