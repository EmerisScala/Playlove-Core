'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forum_Question = sequelize.define('Forum_Question', {
    id_forum_question: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    active:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    timestamps: true
  }, {});
  Forum_Question.associate = function(models) {
    Forum_Question.hasMany(models.Answer);
    Forum_Question.belongsTo(models.User);
    Forum_Question.belongsTo(models.Topic);
  };
  return Forum_Question;
};