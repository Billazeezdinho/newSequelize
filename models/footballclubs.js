const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../DATABASE/sequelize'); 


  class footballclubs extends Model {}
  footballclubs.init({
    //model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    ucl: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    coach: {
      type: DataTypes.STRING,
      allowNull:false
    },
    ucl: {
      type: DataTypes.STRING,
      allowNull:false
    },
    stadium: {
      type: DataTypes.STRING,
      allowNull:false
    },
    topsix: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'footballclubs',
    tableName: 'footballclubs'
  });

  module.exports = footballclubs;