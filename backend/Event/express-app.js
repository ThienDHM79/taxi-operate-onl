const express = require('express');
const router = express.Router();
const cors = require('cors');

const {BaseEmitter} = require('./BaseEmitter');

async function expressApp (app) {
    app.use( express.json() );
    app.use( cors() );
    app.use( express.static(__dirname + '/public') );
    app.use( express.urlencoded( { extended: false }));

    //add in process

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