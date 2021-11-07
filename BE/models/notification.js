'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  notification.init({
    title: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'user',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    description: DataTypes.STRING,
    avatar: DataTypes.STRING,
    type: DataTypes.STRING,
    unread: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'notification',
    freezeTableName: true
  });
  return notification;
};