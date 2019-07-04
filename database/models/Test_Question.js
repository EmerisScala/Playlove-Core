'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test_Question = sequelize.define('Test_Question', {
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
    timestamps: true
  }, {});
  Test_Question.associate = function(models) {
    Test_Question.belongsTo(models.Test);
  };
  return Test_Question;
};