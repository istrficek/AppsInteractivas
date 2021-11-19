'use strict';
const {
  Model
} = require('sequelize');
const child = require('./child');

module.exports = (sequelize, DataTypes) => {
  class vaccine_calendar extends Model {
    static associate(models) {
    }
  };

  vaccine_calendar.init({
    vaccine: DataTypes.STRING,
    dosis: DataTypes.STRING,
    months_min: DataTypes.INTEGER,
    months_max: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'vaccine_calendar',
    freezeTableName: true
  });
  return vaccine_calendar;
};