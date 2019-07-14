'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_user: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER(15).UNSIGNED
    },
    nickname: {
      allowNull: false,
      type: DataTypes.STRING(15)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    firstLastName:{
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    secondLastName: DataTypes.STRING(30),
    photo:{
      allowNull: true,
      type: DataTypes.STRING
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING(15)
    },
    email:{
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    datebirth:{
      allowNull: true,
      type: DataTypes.DATE
    },
    gender:{
      allowNull: true,
      type: DataTypes.STRING(10)
    },
    sexualPreference: {
      allowNull: true,
      type: DataTypes.STRING(30)
    },
    status:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    active:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
    // timestamps : true
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Publication);
    User.hasMany(models.List);
    User.hasMany(models.Forum_Question);
    User.hasMany(models.Kiss);
    User.hasMany(models.Key);
    User.hasMany(models.Report);

    //ManyToMany Relationship, User side
    User.belongsToMany(models.Test, {
      through: models.User_Test,
      foreignKey: 'id_user'
    });
  };
  return User;
};