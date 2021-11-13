'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blood_type', [
      {
        description: 'A+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'O+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'B+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'AB+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'A-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'O-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'B-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'AB-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('blood_type', null, {});
  }
};
