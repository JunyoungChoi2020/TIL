'use strict';
const { Model } = require('sequelize');

/**
 * @param {import("sequelize").Sequelize} sequelize - Sequelize
 * @param {import("sequelize").DataTypes} DataTypes - Sequelize Column DataTypes
 * @return {Model} - Sequelize Model
 * **/
module.exports = (sequelize, DataTypes) => {
  class NaverCafeUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  NaverCafeUsers.init(
    {
      cafeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      nickname: DataTypes.STRING,
      description: DataTypes.STRING,
      isCafeUser: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'NaverCafeUsers',
    }
  );
  return NaverCafeUsers;
};
