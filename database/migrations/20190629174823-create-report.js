'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reports', {
      id_report: {
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
      id_user_sender: {
        type: Sequelize.INTEGER(15).UNSIGNED,
        foreignKey: true,
        references: {
        model: "users",
        key: "id_user"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        },
      id_user_receiver: {
        type: Sequelize.INTEGER(15).UNSIGNED,
        foreignKey: true,
        references: {
        model: "users",
        key: "id_user"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reports');
  }
};