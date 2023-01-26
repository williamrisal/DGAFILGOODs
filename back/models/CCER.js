'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CCER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CCER.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    stats: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'CCER',
  });
  return CCER;
};