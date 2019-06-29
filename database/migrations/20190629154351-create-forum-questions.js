'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Forum_Questions', {
      id_forum_question: {
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
        id_topic: {
          type: Sequelize.INTEGER(15).UNSIGNED,
          foreignKey: true,
          references: {
          model: "topics",
          key: "id_topic"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
          }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Forum_Questions');
  }
};