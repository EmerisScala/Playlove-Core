'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    id_topic: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    timestamps: true
  }, {});
  Topic.associate = function(models) {
    Topic.hasOne(models.Forum_Question);
  };
  return Topic;
};