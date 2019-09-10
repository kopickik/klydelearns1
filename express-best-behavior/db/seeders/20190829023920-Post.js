'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'Post 1',
        userId: 1,
        content: `Some long string stuff here!`,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Post 23',
        userId: 2,
        content: `Another longer version of the string stuff here!`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Posts', null, {})
};
