const CheckService = require('./CheckService');

module.exports = {
    getPercentiles(id) {
        return CheckService.getLastCheck(id)
            .then((lastCheck) => {
                CheckService.getById(lastCheck.dataValues.id)
                    .then((result)=> {})                       
            })         
    }
}