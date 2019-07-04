'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id_item: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(15).UNSIGNED
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
        id_list: {
          type: Sequelize.INTEGER(15).UNSIGNED,
          foreignKey: true,
          references: {
          model: "lists",
          key: "id_list"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
          }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};