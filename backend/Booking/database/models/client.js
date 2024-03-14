'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    phonenum: DataTypes.STRING,
    clienttype: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    detailsinfo: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};