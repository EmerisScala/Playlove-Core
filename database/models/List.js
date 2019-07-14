'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    id_list: {
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
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    timestamps: true
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User);
    List.hasMany(models.Item);
  };
  return List;
};