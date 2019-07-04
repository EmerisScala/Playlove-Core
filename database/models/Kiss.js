'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kiss = sequelize.define('Kiss', {
    id_kiss: {
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
    timestamps: true
  }, {});
  Kiss.associate = function(models) {
    Kiss.belongsTo(models.User, {foreignKey:'id_user_receiver'});
    Kiss.belongsTo(models.User, {foreignKey:'id_user_sender'});
  };
  return Kiss;
};