const {v4 :uuid} = require('uuid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('footballclubs', [
      {
        id: uuid(),
        name: 'madrid',
        coach: 'mike',
        stadium: 'barnebau stadium',
        ucl: 6,
        topsix: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('footballclubs', null, {});
  },
};

