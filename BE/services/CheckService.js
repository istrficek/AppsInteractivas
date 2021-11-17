const Check = require('../models').check
const CheckResult = require('../models').check_result

const { Op } = require("sequelize");

module.exports = {
    getAll() {
        return Check.findAll({include: [{ all: true, nested: true }]})
    },
    getNextCheck(sons) {
        return Check.findOne({            
            order: [['date','asc']],
            include: [{ all: true }],
            where: {
                [Op.and]: [
                  { child_id: sons }, // child_id IN sons
                  { date: { [Op.gt]: new Date() } } // date > today
                ]
              },              
        });
    }
}

