const CheckService = require('../services/CheckService')
const ChildService = require('../services/ChildService')

module.exports = {
    getNextCheck(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        CheckService.getNextCheck(sonsIds)
            .then((nextCheck) => { 
                res.status(200).send(nextCheck)                       
            })
            .catch((error) => { console.log(error) })                    
    },
    getCheckHistory(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        CheckService.getAllById(sonsIds)
            .then((checkHistory) => { 
                res.status(200).send(checkHistory)                       
            })
            .catch((error) => { console.log(error) }) 
    },
    setCheckResult(req, res) {
        CheckService.setCheckResult(req.body)
            .then((result) => {
                CheckService.markCheckAsFinished(req.body.check_id)
                    .then((success) => {
                        res.status(200).send(result) 
                    })
                    .catch((error) => {
                        console.log('Error Updating Check ' + error)
                        res.status(200).send({error: 'Error Updating Check ' + error})
                    })
            })
            .catch((error) => {
                console.log('Error Inserting Check Result ' + error)
                res.status(200).send({error: 'Error Inserting Check Result ' + error})
            })
            
    },
    setNewCheck(req, res) {
        CheckService.saveNewCheck(req.body)
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((error) => {
                console.log(error)
                res.status(200).send({error: 'Error Creating Check ' + error})
            })
    }
}