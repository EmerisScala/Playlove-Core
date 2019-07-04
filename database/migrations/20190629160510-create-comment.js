'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id_comment: {
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
      id_publication: {
        type: Sequelize.INTEGER(15).UNSIGNED,
        foreignKey: true,
        references: {
        model: "publications",
        key: "id_publication"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};