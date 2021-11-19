const ChildService = require('../services/ChildService');
const VaccineService = require('../services/VaccineService')

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

module.exports = {
    getNextVaccine(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        VaccineService.getNextVaccine(sonsIds)
            .then((nextVaccine) => { 
                if(nextVaccine === null)
                    nextVaccine = {}
                res.status(200).send(nextVaccine)                       
            })
            .catch((error) => { console.log(error) })                    
    },
    getVaccineHistory(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        VaccineService.getAllById(sonsIds)
            .then((vaccineHistory) => { 
                res.status(200).send(vaccineHistory)                       
            })
            .catch((error) => { console.log(error) }) 
    },
    setVaccineResult(req, res) {
        VaccineService.markVaccineAsFinished(req.params.id)
            .then((result) => {
                res.status(200).send(result) 
            })
            .catch((error) => {
                console.log('Error Inserting Vaccine Result ' + error)
                res.status(200).send({error: 'Error Inserting Vaccine Result ' + error})
            })
            
    },
    setNewVaccine(req, res) {
        VaccineService.saveNewVaccine(req.body)
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((error) => {
                console.log(error)
                res.status(200).send({error: 'Error Creating Vaccine ' + error})
            })
    },
    getRecomendations(req, res) {
        ChildService.getById(req.params.id)
            .then((child) => {
                let months = monthDiff(new Date(child.birthday), new Date());
                VaccineService.getRecomendations(months)
                    .then((result) => {
                        res.status(200).send(result)
                    })
                    .catch((error) => {
                        console.log(error)
                        res.status(200).send({error: 'Error Getting Recomendations ' + error})
                    })
            })
        
    }
}