'use strict';
const {
  Model
} = require('sequelize');
const study = require('./study');

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
    study_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'study',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },    
    observations: DataTypes.STRING,
    files: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'study_result',
    freezeTableName: true
  });
  return study_result;
};