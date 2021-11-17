const CheckService = require('../services/CheckService')
const ChildService = require('../services/ChildService')
const StudyService = require('../services/StudyService')
const VaccineService = require('../services/VaccineService')

module.exports = {
    getDashboard(req, res) {
        ChildService.getSonsId(req.params.id)
            .then((sons) => { 
                let sonsIds = [];
                let appointments = {
                    check: '',
                    vaccine: '',
                    study: ''
                };
                sons.forEach(element => {
                    sonsIds.push(element.dataValues.child_id);
                });
                CheckService.getNextCheck(sonsIds)
                    .then((nextCheck) => { 
                        if(nextCheck !== null){
                            appointments.check = {
                                date: nextCheck.date, 
                                name: nextCheck.child.name, 
                                id: nextCheck.child.id 
                            }
                        }
                        StudyService.getNextStudy(sonsIds)
                            .then((nextStudy) => { 
                                if(nextStudy !== null){
                                    appointments.study = {
                                        date: nextStudy.date, 
                                        name: nextStudy.child.name, 
                                        id: nextStudy.child.id 
                                    }
                                }                                
                                VaccineService.getNextVaccine(sonsIds)
                                    .then((nextVaccine) => { 
                                        if(nextVaccine !== null){
                                            appointments.vaccine = {
                                                date: nextVaccine.date, 
                                                name: nextVaccine.child.name, 
                                                id: nextVaccine.child.id 
                                            }
                                        }                                         
                                        res.status(200).send(appointments)
                                    })
                                    .catch((error) => { 
                                        console.log(error);
                                        res.status(200).send('Error');
                                    })
                            })
                            .catch((error) => { 
                                console.log(error);
                                res.status(200).send('Error');
                            })
                    })
                    .catch((error) => { 
                        console.log(error);
                        res.status(200).send('Error');
                    })                                            
             })            
    }
}