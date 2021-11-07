'use strict';
const {
  Model
} = require('sequelize');
const child = require('./child');

module.exports = (sequelize, DataTypes) => {
  class vaccine extends Model {

    static associate(models) {}
  };
  vaccine.init({
    child_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'child',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    doctor: DataTypes.STRING,
    description: DataTypes.STRING,
    received: DataTypes.BOOLEAN,
    dosis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vaccine',
    freezeTableName: true
  });
  return vaccine;
};