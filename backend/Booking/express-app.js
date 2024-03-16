const express = require('express');
const router = express.Router();
const cors = require('cors');

const {ClientAPI} = require('./api/client.api');
const {BookingAPI} = require('./api/booking.api')

async function expressApp (app) {
    app.use( express.json() );
    app.use( cors() );
    app.use( express.static(__dirname + '/public') );
    app.use( express.urlencoded( { extended: false }));


    const clientAPI = new ClientAPI();
    clientAPI.ClientOp(app);
    clientAPI.ClientAdmin(app);

    const bookingAPI = new BookingAPI();
    bookingAPI.Action(app);

    app.use( (req, res, next) => {
        res.status(404).json( {message: 'File not found'});
    })
    app.use( (error, req, res, next) => {
        const logdate = new Date();
        console.error(error);
        res.status(500).json( {message: 'Internal server error'});
    })

}


module.exports = { 
    expressApp: expressApp,
}