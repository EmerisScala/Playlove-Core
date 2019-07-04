'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Test_Questions', {
      id_test_question: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(15).UNSIGNED
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      active:{
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_test: {
        type: Sequelize.INTEGER(15).UNSIGNED,
        foreignKey: true,
        references: {
        model: "tests",
        key: "id_test"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Test_Questions');
  }
};