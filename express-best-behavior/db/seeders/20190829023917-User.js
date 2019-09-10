'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {name: 'Jane Doe', email: 'jane.doe@sharklasers.com', createdAt: new Date(), updatedAt: new Date() },

     {name: 'John Doe', email: 'john.doe@sharklasers.com', createdAt: new Date(), updatedAt: new Date() },    ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
