const CheckService = require("../services/CheckService")
const ChildService = require("../services/ChildService")
const PercentileService = require("../services/PercentileService")

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

module.exports = {
    getPercentiles(req, res) {
        ChildService.getById(req.params.id)
            .then((child) => {
                CheckService.getLastCheck(child.id)
                .then((lastCheck) => {
                    CheckService.getResultById(lastCheck.dataValues.id)
                        .then((lastResult) => {
                            let months = monthDiff(new Date(child.birthday), new Date());
                            let result = {
                                head_size: lastResult.dataValues.head_size,
                                height: lastResult.dataValues.height,
                                weight: lastResult.dataValues.weight,
                                months: months,
                                name: child.name,                          
                            }
                            res.status(200).send(result)
                        })
                })
            })        
    }
}