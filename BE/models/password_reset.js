'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password_reset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  password_reset.init({
    user_id: DataTypes.STRING,
    code: DataTypes.STRING,
    finished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'password_reset',
    freezeTableName: true
  });
  return password_reset;
};