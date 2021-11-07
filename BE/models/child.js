'use strict';
const {
  Model
} = require('sequelize');
const blood_type = require('./blood_type');

module.exports = (sequelize, DataTypes) => {
  class child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      child.belongsTo(models.blood_type, {
        as: "blood_type",
        foreignKey: "id",
      });
    }
  };
  child.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dni: DataTypes.STRING,
    blood_type_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: 'blood_type',  
        // This is the column name of the referenced model
        key: 'id',
      }
    },    
    allergies: DataTypes.STRING,
    cronic_diseases: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'child',
    freezeTableName: true
  });
  return child;
};