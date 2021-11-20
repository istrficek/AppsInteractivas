'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vaccine_calendar', [
      {
        vaccine: 'BCG',
        dosis: 'Monodosis',
        months_min: 0,
        months_max: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Hepatits B',
        dosis: '1° Dósis',
        months_min: 0,
        months_max: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Pentavalente',
        dosis: '1° Dósis',
        months_min: 2,
        months_max: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Rotavirus',
        dosis: '1° Dósis',
        months_min: 2,
        months_max: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'SALK',
        dosis: '1° Dósis',
        months_min: 2,
        months_max: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Neumococo Conjugada',
        dosis: '1° Dósis',
        months_min: 2,
        months_max: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Meningococo',
        dosis: '1° Dósis',
        months_min: 3,
        months_max: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Pentavalente',
        dosis: '2° Dósis',
        months_min: 4,
        months_max: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Rotavirus',
        dosis: '2° Dósis',
        months_min: 4,
        months_max: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'SALK',
        dosis: '2° Dósis',
        months_min: 4,
        months_max: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Neumococo Conjugada',
        dosis: '2° Dósis',
        months_min: 4,
        months_max: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Meningococo',
        dosis: '2° Dósis',
        months_min: 5,
        months_max: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Pentavalente',
        dosis: '3° Dósis',
        months_min: 6,
        months_max: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'SALK',
        dosis: '3° Dósis',
        months_min: 6,
        months_max: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Gripe',
        dosis: 'Dósis Anual',
        months_min: 6,
        months_max: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Neumococo Conjugada',
        dosis: 'Refuerzo',
        months_min: 12,
        months_max: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Triple Viral',
        dosis: '1° Dósis',
        months_min: 12,
        months_max: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Hepatitis A',
        dosis: 'Única Dósis',
        months_min: 12,
        months_max: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Meningococo',
        dosis: 'Refuerzo',
        months_min: 15,
        months_max: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Varicela',
        dosis: 'Única Dósis',
        months_min: 15,
        months_max: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vaccine: 'Cuádruple',
        dosis: 'Refuerzo',
        months_min: 15,
        months_max: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vaccine_calendar', null, {});
  }
};
