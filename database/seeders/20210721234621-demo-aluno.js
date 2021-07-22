'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('alunos', [{
        nome: 'Camila',
        sobrenome: 'Almeida',
        ano_matricula: 2013,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Rafaela',
        sobrenome: 'Gomes',
        ano_matricula: 2011,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nome: 'Carlo',
        sobrenome: 'Jonas',
        ano_matricula: 2010,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('alunos', null, {});

  }
};