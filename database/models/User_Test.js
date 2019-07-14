'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Test = sequelize.define('User_Test', {
    id_user: {
      type: DataTypes.INTEGER(15).UNSIGNED,
      allowNull: false,
      references: {
      model: "users",
      key: "id_user"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
      },
      id_test: {
        type: DataTypes.INTEGER(15).UNSIGNED,
        allowNull: false,
        references: {
        model: "tests",
        key: "id_test"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        },
    active:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    timestamps: true
  }, {});
  User_Test.associate = function(models) {
    // associations can be defined here
  };
  return User_Test;
};