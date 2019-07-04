'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    id_list: {
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
    name: {
      allowNull: false,
      type: Sequelize.STRING(30)
    },
    timestamps: true
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User);
    List.hasMany(models.Item);
  };
  return List;
};