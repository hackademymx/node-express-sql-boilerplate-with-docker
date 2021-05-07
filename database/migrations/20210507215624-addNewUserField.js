'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'age');
  }
};
