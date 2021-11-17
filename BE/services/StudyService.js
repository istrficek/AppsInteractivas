const Study = require('../models').study
const StudyResult = require('../models').study_result

const { Op } = require("sequelize");

module.exports = {
    getAll() {
        return Study.findAll({include: [{ all: true, nested: true }]})
    },
    getNextStudy(sons) {
        return Study.findOne({
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

