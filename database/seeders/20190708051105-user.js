'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id_user: 771,
      nickname: 'Emeris',
      name: 'Emeris',
      firstLastName:'Hernandez',
      secondLastName:'Ortiz',
      photo:'Fotito.jpg',
      password: 'root',
      email:'emerisortiz@gmail.com',
      datebirth: '1996/09/06',
      gender: 'Masculino',
      sexualPreference: 'Mujeres',
      status: true,
      active: true
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
