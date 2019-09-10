'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        postId: 1,
        comment: 'Hey great post! :3',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        postId: 2,
        comment: 'Hey again another great post! :3',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
