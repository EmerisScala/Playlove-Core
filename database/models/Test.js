'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    id_test: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    active:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    timestamps: true
  }, {});
  Test.associate = function(models) {
    Test.hasMany(models.Test_Question);
    Test.belongsToMany(models.User, {
      through: models.User_Test,
      foreignKey: 'id_test'
    })
  };
  return Test;
};