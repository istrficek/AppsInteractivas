'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model { 
      static associate(models) {
        // define association here
        User.hasMany(models.child_of, {
          as: "children",
          foreignKey: "user_id",
        });
      }
     }

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