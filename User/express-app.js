const express = require('express');
const cors = require('cors');
/*
import { UserAPI } from './user/user.api.js';
import { fileURLToPath } from 'url';
*/
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function expressApp (app) {
    app.use( express.json() );
    app.use( cors() );
    app.use( express.static(__dirname + '/public') );
    app.use( express.urlencoded( { extended: false }));


    //UserAPI(app);
}
class NewClass{
    async WriteLog(){
        console.log('new class');
    }
}


module.exports = { 
    expressApp: expressApp,
    NewClass: NewClass
}