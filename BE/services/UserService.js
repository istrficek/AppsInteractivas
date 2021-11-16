const User = require('../models').user

module.exports = {
    updateImage(pic, id) {
        return User.update({ picture: pic }, {
            where: {
              id: id
            }
          });
    }
}