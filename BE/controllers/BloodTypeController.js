const Service = require('../services/BloodTypeService');

module.exports = {
    getAll(req, res) {
        Service.getAll()
            .then((types) => { res.status(200).send(types) })
            .catch((error) => { 
                console.log(error);
                res.status(200).send('Error');
            })
    }
}