const Child = require('../models').child
const ChildOf = require('../models').child_of

module.exports = {
    getAll() {
        return Child.findAll({include: [{ all: true, nested: true }]})
    },
    getSons(id) {
        return ChildOf
            .findAll({                
                include: [{ all: true, nested: true }],
                where: {
                user_id: id,
                },
            })
    },
    getSonsId(id) {
        return ChildOf
            .findAll({
                attributes: ['child_id'],
                where: {
                user_id: id,
                },
            })
    }
}