const Check = require('../models').check
const CheckResult = require('../models').check_result

const { Op } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
    getAll() {
        return Check.findAll({include: [{ all: true, nested: true }]})
    },
    getAllById(sons) {
        return Check
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
    getNextCheck(sons) {
        return Check.findOne({            
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
    setCheckResult(result) {
        return CheckResult
            .create({
                check_id: result.check_id,
                dose: result.dose,
                head_size: result.head_size,
                height: result.height,
                meds: result.meds,
                observations: result.observations,
                period: result.period,
                study: result.study,
                weight: result.weight,
            })
    },
    markCheckAsFinished(id) {
        return Check.update(
            { finished: 1 }, 
            {
                where: {
                id: id
                }
            });
    },
    saveNewCheck(check) {
        return Check
            .create({
                date: check.date,
                address: check.address,
                doctor: check.doctor,
                child_id: check.child_id,
                finished: 0
            })
    },
    getLastCheck(id) {
        return Check
            .findOne({
                order:[
                    ['id', 'ASC']
                ],
                where:{
                    [Op.and]: [
                      { child_id: id },
                      { finished: 1 } 
                    ]
                  }
            })        
    },
    getResultById(id){
        return CheckResult
            .findOne({
                where: {
                    check_id: id
                }
            })  
    }
}

