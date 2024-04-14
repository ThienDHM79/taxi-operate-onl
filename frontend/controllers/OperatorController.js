'use strict';
let controller = {};
const axios = require('axios');
const { stringify } = require('nodemon/lib/utils');
const baseUrl = 'http://localhost:7000';
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


const postDataAxios = async(data, apiUrl) => {
    const json = JSON.stringify(data);
    console.log(json);
    const res = await axios.post(apiUrl, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data.data;
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
        const createTrip = await postDataAxios(createTripData, baseUrl + '/v1/Booking', );
        await console.log(`create success ${createTrip}`);

    } catch (error){
        res.locals.noti_message = error.message;
        console.log(error.message);
    }
    next();
}

module.exports = controller;
