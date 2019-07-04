'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id_answer: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(15).UNSIGNED
    },
    active: {
      type: Sequelize.BOOLEAN
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
    timestamps : true
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.Forum_Question);
  };
  return Answer;
};