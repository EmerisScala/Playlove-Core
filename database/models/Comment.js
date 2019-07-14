'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id_comment: {
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
  Comment.associate = function(models) {
    // Comment.belongsTo(models.Publication, {foreignKey: 'id_publication'}); //With a different PK of the standard.
    Comment.belongsTo(models.Publication);
  };
  return Comment;
};