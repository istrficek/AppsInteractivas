'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {  }

    User.init(
      {
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
        modelName: "user",
        freezeTableName: true
      }
    );
    return User;
  };