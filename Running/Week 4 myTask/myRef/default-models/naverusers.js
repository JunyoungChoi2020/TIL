'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  NaverUsers.init(
    {
      id: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      gender: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: 'NaverUsers',
    }
  );

  return NaverUsers;
};
