'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  child.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dni: DataTypes.STRING,
    blood_type: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    cronic_diseases: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'child',
  });
  return child;
};