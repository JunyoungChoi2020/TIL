'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  NaverCafes.init(
    {
      userId: DataTypes.INTEGER,
      cafeUrl: DataTypes.STRING,
      cafeName: DataTypes.STRING,
      cafeLogo: DataTypes.STRING,
      cafeDescription: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NaverCafes',
    }
  );
  return NaverCafes;
};
