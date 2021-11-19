const StudyService = require('../services/StudyService')

module.exports = {
    getNextStudy(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        StudyService.getNextStudy(sonsIds)
            .then((nextStudy) => { 
                res.status(200).send(nextStudy)                       
            })
            .catch((error) => { console.log(error) })                    
    },
    getStudyHistory(req, res) {
        let sonsIds = [];
        sonsIds.push(req.params.id)
        StudyService.getAllById(sonsIds)
            .then((studyHistory) => { 
                res.status(200).send(studyHistory)                       
            })
            .catch((error) => { console.log(error) }) 
    },
    setStudyResult(req, res) {
        StudyService.setStudyResult(req.body)
            .then((result) => {
                StudyService.markStudyAsFinished(req.body.study_id)
                    .then((success) => {
                        res.status(200).send(result) 
                    })
                    .catch((error) => {
                        console.log('Error Updating Study ' + error)
                        res.status(200).send({error: 'Error Updating Study ' + error})
                    })
            })
            .catch((error) => {
                console.log('Error Inserting Study Result ' + error)
                res.status(200).send({error: 'Error Inserting Study Result ' + error})
            })
            
    },
    setNewStudy(req, res) {
        StudyService.saveNewStudy(req.body)
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((error) => {
                console.log(error)
                res.status(200).send({error: 'Error Creating Study ' + error})
            })
    }
}