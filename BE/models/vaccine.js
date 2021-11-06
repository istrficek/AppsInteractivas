'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vaccine.init({
    child_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    doctor: DataTypes.STRING,
    description: DataTypes.STRING,
    received: DataTypes.BOOLEAN,
    dosis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vaccine',
  });
  return vaccine;
};