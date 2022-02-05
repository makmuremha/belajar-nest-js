'use strict';

module.exports = {

  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize/types').DataType} Sequelize
   */

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      flag: {
        type: Sequelize.ENUM('active', 'completed'),
        allowNull: false,
        defaultValue: 'active'
      }
    });
  },

  /**
   *
   * @param {import('sequelize/types').QueryInterface} queryInterface
   * @param {import('sequelize/types').DataType} Sequelize
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};
