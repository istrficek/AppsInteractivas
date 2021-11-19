const Study = require('../models').study
const StudyResult = require('../models').study_result

const { Op } = require("sequelize");

module.exports = {
    getAll() {
        return Study.findAll({include: [{ all: true, nested: true }]})
    },
    getAllById(sons) {
        return Study
            .findAll({
                include: [{ all: true }],
                where: {
                    [Op.and]: [
                        { child_id: sons }, // child_id IN sons
                        { finished: 1 } 
                    ]
                }
            })
    },
    getNextStudy(sons) {
        return Study.findOne({            
            order: [['date','asc']],
            include: [{ all: true }],
            where: {
                [Op.and]: [
                  { child_id: sons }, // child_id IN sons
                  { finished: 0 } 
                ]
              },              
        });
    },
    setStudyResult(result) {
        return StudyResult
            .create({
                study_id: result.study_id,
                observations: result.obs,
                files: result.files
            })
    },
    markStudyAsFinished(id) {
        return Study.update(
            { finished: 1 }, 
            {
                where: {
                id: id
                }
            });
    },
    saveNewStudy(study) {
        return Study
            .create({
                child_id: study.child_id,
                date: study.date,
                address: study.address,
                doctor: study.doctor,
                description: study.description,                
                finished: 0
            })
    }
}

