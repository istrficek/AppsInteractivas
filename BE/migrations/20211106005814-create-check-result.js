'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('check_results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      check_id: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.DECIMAL
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      head_size: {
        type: Sequelize.DECIMAL
      },
      meds: {
        type: Sequelize.STRING
      },
      dose: {
        type: Sequelize.STRING
      },
      period: {
        type: Sequelize.STRING
      },
      study: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('check_results');
  }
};