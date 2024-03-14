const express = require('express');
const cors = require('cors');
/*
import { UserAPI } from './user/user.api.js';
import { fileURLToPath } from 'url';
*/
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

const {UserAPI} = require('./api/client.api');
const {OperatorAPI} = require('./api/booking.api')

async function expressApp (app) {
    app.use( express.json() );
    app.use( cors() );
    app.use( express.static(__dirname + '/public') );
    app.use( express.urlencoded( { extended: false }));

    const operatorAPI = new OperatorAPI();
    operatorAPI.OperatorAction(app); 
    
    const userAPI = new UserAPI();
    userAPI.UserOp(app);
    userAPI.UserAdmin(app);
    userAPI.UserError(app);

    

}


module.exports = { 
    expressApp: expressApp,
}