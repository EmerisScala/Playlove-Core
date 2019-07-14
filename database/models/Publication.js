'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define('Publication', {
    id_publication: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    active:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING
    },
    timestamps : true
  }, {});
  Publication.associate = function(models) {
    Publication.hasMany(models.Comment);
    Publication.belongsTo(models.User);
  };
  return Publication;
};