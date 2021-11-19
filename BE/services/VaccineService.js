const Vaccine = require('../models').vaccine
const VaccineCalendar = require('../models').vaccine_calendar

const { Op } = require("sequelize");

module.exports = {
    getAll() {
        return Vaccine.findAll({include: [{ all: true, nested: true }]})
    },
    getAllById(sons) {
        return Vaccine
            .findAll({
                include: [{ all: true }],
                where: {
                    [Op.and]: [
                        { child_id: sons }, // child_id IN sons
                        { received: 1 } 
                    ]
                }
            })
    },
    getNextVaccine(sons) {
        return Vaccine.findOne({            
            order: [['date','asc']],
            include: [{ all: true }],
            where: {
                [Op.and]: [
                  { child_id: sons }, // child_id IN sons
                  { received: 0 } 
                ]
              },              
        });
    },
    markVaccineAsFinished(id) {
        return Vaccine.update(
            { received: 1 }, 
            {
                where: {
                id: id
                }
            });
    },
    saveNewVaccine(vaccine) {
        return Vaccine
            .create({
                child_id: vaccine.child_id,
                date: vaccine.date,
                address: vaccine.address,
                doctor: vaccine.doctor,
                description: vaccine.description,
                dosis: vaccine.dosis,             
                received: 0
            })
    },
    getRecomendations(months) {
        return VaccineCalendar
            .findAll({
                where: {
                    [Op.and]: [
                      { months_min: { [Op.lte]: months } },
                      { months_max: { [Op.gte]: months } } 
                    ]
                  },
            })
    }
}

