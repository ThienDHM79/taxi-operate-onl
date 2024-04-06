'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class engagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  engagement.init({
    //driver relationship
    //trip relationship
    //data for front end
    tripdetails: DataTypes.JSON,
    driverdetails: DataTypes.JSON,

    servicestatus: DataTypes.STRING,
    driverstatus: DataTypes.STRING,

    latitude: DataTypes.INTEGER,
    longtitude: DataTypes.INTEGER,
    geofence_id: DataTypes.INTEGER,

    servicehistory: DataTypes.JSON,
    
  }, {
    sequelize,
    modelName: 'engagement',
  });
  return engagement;
};