'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER(15).UNSIGNED
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      firstLastName:{
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      secondLastName:{
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      photo:{
        allowNull: true,
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      email:{
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      datebirth:{
        allowNull: true,
        type: Sequelize.DATE
      },
      gender:{
        allowNull: true,
        type: Sequelize.STRING(10)
      },
      sexualPreference: {
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      status:{
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};