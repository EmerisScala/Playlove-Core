'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    id_report: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(15).UNSIGNED
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
    },
    active:{
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    timestamps: true
  }, {});
  Report.associate = function(models) {
    Report.belongsTo(models.User, {foreignKey:'id_user_receiver'});
    Report.belongsTo(models.User, {foreignKey:'id_user_sender'});
  };
  return Report;
};