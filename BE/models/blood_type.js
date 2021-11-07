'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blood_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  blood_type.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blood_type',
    freezeTableName: true
  });
  return blood_type;
};