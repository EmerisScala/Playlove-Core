'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id_answer: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    active: {
      type: DataTypes.BOOLEAN
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
    timestamps : true
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.Forum_Question);
  };
  return Answer;
};