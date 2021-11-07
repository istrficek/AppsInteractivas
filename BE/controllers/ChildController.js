const Service = require('../services/ChildService')

module.exports = {
    getAll(req,res) {
        Service.getAll()
            .then((children) => {res.status(200).send(children)})
            .catch((error) => {res.status(200).send({error: error})})        
    }
}
