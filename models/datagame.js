'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataGame.init({
    mdate: DataTypes.STRING,
    stadium: DataTypes.STRING,
    team1: DataTypes.STRING,
    team2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataGame',
  });
  return DataGame;
};