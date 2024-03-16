const express = require('express');
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
    clientAPI.ClientError(app);

}


module.exports = { 
    expressApp: expressApp,
}