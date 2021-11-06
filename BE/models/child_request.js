'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class child_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  child_request.init({
    original_user_id: DataTypes.INTEGER,
    new_user_id: DataTypes.INTEGER,
    request_date: DataTypes.DATE,
    child_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'child_request',
  });
  return child_request;
};