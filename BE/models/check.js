'use strict';
const {
  Model
} = require('sequelize');
const child = require('./child');

module.exports = (sequelize, DataTypes) => {
  class check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      check.belongsTo(models.child, {
        as: "child",
        foreignKey: "child_id",
      });
    }
  };
  check.init({
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    doctor: DataTypes.STRING,
    child_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'child',  
        // This is the column name of the referenced model
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'check',
    freezeTableName: true
  });
  return check;
};