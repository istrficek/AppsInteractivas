const User = require('../models').user

module.exports = {
    updateImage(newPic) {
        return User.update({ picture: newPic.pic }, {
            where: {
              id: newPic.id
            }
          });
    },
    getByDNI(dni) {
      return User.findOne({
        where: {
          dni: dni
        }
      })
    },
    getByEmail(mail){
      return User
        .findOne({
          include: [{ all: true, nested: true }],
          where: {
            id: mail
          },
        })
    }
}