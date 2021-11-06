'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class study_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  study_result.init({
    study_id: DataTypes.INTEGER,
    observations: DataTypes.STRING,
    files: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'study_result',
  });
  return study_result;
};