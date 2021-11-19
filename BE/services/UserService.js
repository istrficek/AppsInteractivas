const User = require('../models').user

module.exports = {
    updateImage(newPic) {
        return User.update({ picture: newPic.pic }, {
            where: {
              id: newPic.id
            }
          });
    }
}