const Vaccine = require('../models').vaccine

const { Op } = require("sequelize");

module.exports = {
    getAll() {
        return Vaccine.findAll({include: [{ all: true, nested: true }]})
    },
    getNextVaccine(sons) {
        return Vaccine.findOne({
            order: [['date','asc']],
            include: [{ all: true }],
            where: {
                [Op.and]: [
                  { child_id: sons }, // child_id IN sons
                  { date: { [Op.gt]: new Date() } } // date > today
                ]
              }
        });
    }
}

