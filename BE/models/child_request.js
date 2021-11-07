'use strict';
const {
  Model
} = require('sequelize');
const child = require('./child');
const user = require('./user');

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
    original_user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'user',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    new_user_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'user',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    request_date: DataTypes.DATE,
    child_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'child',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },
    child_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'child_request',
    freezeTableName: true
  });
  return child_request;
};