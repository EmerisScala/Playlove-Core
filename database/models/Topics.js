'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    id_topic: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(15).UNSIGNED
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    timestamps: true
  }, {});
  Topic.associate = function(models) {
    Topic.hasOne(models.Forum_Question);
  };
  return Topic;
};