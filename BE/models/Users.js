const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {  }

    User.init(
      {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        dni: DataTypes.STRING,
        phone: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        genere: DataTypes.STRING,
        picture: DataTypes.STRING
      },
      {
        sequelize,
        modelName: "Users",
      }
    );
    return User;
  };