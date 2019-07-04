'use strict';
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    id_key: {
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
  Key.associate = function(models) {
    Key.belongsTo(models.User, {foreignKey:'id_user_receiver'});
    Key.belongsTo(models.User, {foreignKey:'id_user_sender'});
  };
  return Key;
};