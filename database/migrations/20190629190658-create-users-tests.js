'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users_Tests', {
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
      id_user: {
        type: Sequelize.INTEGER(15).UNSIGNED,
        foreignKey: true,
        references: {
        model: "users",
        key: "id_user"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    return queryInterface.dropTable('Users_Tests');
  }
};