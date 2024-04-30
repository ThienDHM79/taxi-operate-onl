'use strict';
let controller = {};
const axios = require('axios');
const { stringify } = require('nodemon/lib/utils');
const baseUrl = 'http://localhost:7000';

const {io} = require("socket.io-client");
const getDataAxios = async (apiUrl) => {
    const response =  await axios.get(apiUrl);
    return response.data;
 
};
class DTO{
    customername;
    customerphone;
    taxitype;
    constructor(data){
        this.customername = data.customername;
        this.customerphone = data.customerphone;
        this.taxitype = data.taxitype;
    
    }
}


controller.getData = async (req, res, next) => {
    //const clientsData = await getDataAxios(baseUrl);

    //update to load data of trip. current data of client (NOT UPDATE AFTER ADD TRIP)
    try {
        const BookingData = await getDataAxios(baseUrl+'/v1/Booking');
        res.locals.clients = BookingData;
        res.locals.noti_message = 'Successful';
    } catch (error){
        res.locals.noti_message = error.message;
        console.log(error.message);
    }
    next();
}
controller.show = async (req, res) => {
    res.render('Operator');
}

controller.create= async( req, res, next) => {
    try{
        const createTripData = new DTO(req.body);

        await axios.post(baseUrl + '/v1/Booking', JSON.stringify(createTripData), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( (resp) => {
            console.log(`post received ${resp.data.tripid}`);
            const socket = io(`http://127.0.0.1:3000`);
            socket.on( 'connect', () => {
                console.log('connected');
                socket.emit('new', {tripid:resp.data.tripid, tripdata: createTripData });
            });
        });

    } catch (error){
        res.locals.noti_message = error.message;
        console.log(error.message);
    }
    next();
}

module.exports = controller;
