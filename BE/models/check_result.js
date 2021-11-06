'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class check_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  check_result.init({
    check_id: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL,
    head_size: DataTypes.DECIMAL,
    meds: DataTypes.STRING,
    dose: DataTypes.STRING,
    period: DataTypes.STRING,
    study: DataTypes.STRING,
    observations: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'check_result',
  });
  return check_result;
};