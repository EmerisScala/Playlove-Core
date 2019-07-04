'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forum_Question = sequelize.define('Forum_Question', {
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
    timestamps: true
  }, {});
  Forum_Question.associate = function(models) {
    Forum_Question.hasMany(models.Answer);
    Forum_Question.hasMany(models.User);
    Forum_Question.belongsTo(models.Topic);
  };
  return Forum_Question;
};