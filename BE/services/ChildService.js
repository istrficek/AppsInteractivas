const Child = require('../models').child
const ChildOf = require('../models').child_of

module.exports = {
    getAll() {
        return Child.findAll({include: [{ all: true, nested: true }]})
    },
    getSons(req) {
        return ChildOf
            .findOne({
                include: [{ all: true, nested: true }],
                where: {
                user_id: req.params.id,
                },
            })
    }
}