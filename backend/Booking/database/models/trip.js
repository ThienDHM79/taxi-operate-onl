'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      trip.hasOne(models.engagement, {foreignKey: 'tripId'});
    }
  }
  trip.init({
    //client relationship
    //engagement relationship
    
    customername: DataTypes.STRING,
    customerphone: DataTypes.STRING,
    taxitype: DataTypes.STRING,
    servicetype: DataTypes.STRING,

    location: DataTypes.STRING, // add in . not have location lat, long
    destination: DataTypes.STRING, // add in

    fare: DataTypes.INTEGER,

    tripstatus: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'trip',
  });
  return trip;
};