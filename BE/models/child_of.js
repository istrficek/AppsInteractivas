'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class child_of extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  child_of.init({
    user_id: DataTypes.INTEGER,
    child_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'child_of',
  });
  return child_of;
};