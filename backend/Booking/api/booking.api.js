'use strict';
const {ClientAPI} = require('./client.api')

class BookingAPI {
    constructor(phonenum, picklocation, taxitype, requesttime){
        this.phonenum = phonenum;
        this.picklocation = picklocation;
        this.taxitype = taxitype;
        this.requesttime = requesttime;
    }   
    Action(app){
        //start booking server
        app.get('/v1/Booking', async(req,res)=>{
            res.json({message:"booking online"});
        })
    }
}
module.exports = {
    BookingAPI: BookingAPI
}