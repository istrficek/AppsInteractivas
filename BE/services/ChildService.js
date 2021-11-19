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
    },
    addChild(child) {
        return Child.
            create({
                name: child.name,
                last_name: child.last_name,
                dni: child.dni,
                birthday: child.birthday,
                blood_type_id: child.blood_type_id,
                allergies: child.aller.join(),
                cronic_diseases: child.cronic_diseases.join(),
                picture: child.pic
            })
            .then((newChild) => {
                ChildOf.
                    create({
                        user_id: child.user_id,
                        child_id: newChild.id
                    })
            })
    }
}