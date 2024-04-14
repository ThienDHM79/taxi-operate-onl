'use strict';
const sequelize = require('sequelize');
//add more if need more model
const Model = require('../models');
class TripDAO{
    customername;
    customerphone;
    location;
    destination;
    taxitype;
    servicetype;
    constructor(data){
        this.customername = data.customername;
        this.customerphone = data.customerphone;
        this.taxitype = data.taxitype;
    }
}
class TripRepository{

    async Get(){
        try{
            const TripdbList = await Model.trip.findAll();
            return TripdbList;
        }
        catch(e){
            throw new Error(`${e.message}`)
        }
    }
    async Create( ServiceInput ){
        try{
            this.tripDAO = new TripDAO(ServiceInput);
            const newTrip = await Model.trip.create( this.tripDAO);
            return newTrip.dataValues;
        } catch(e){
            throw new Error(`${e.message}`)
        }
    }
}


module.exports = {BookingRepository : TripRepository} ;