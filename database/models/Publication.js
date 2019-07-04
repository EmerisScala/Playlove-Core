'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define('Publication', {
    id_publication: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(15).UNSIGNED
    },
    active:{
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image: {
      allowNull: true,
      type: Sequelize.STRING
    },
    timestamps : true
  }, {});
  Publication.associate = function(models) {
    Publication.hasMany(models.Comment);
    Publication.belongsTo(models.User);
  };
  return Publication;
};