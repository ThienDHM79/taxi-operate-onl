'use strict';
require('dotenv').config();
const express = require('express');

const {expressApp, NewClass} = require('./express-app.js');

const StartServer = async() => {
    const app = express();
    const port = process.env.PORT || 8000;

    app.use('/', (req, res) => {
        res.json('main page');
    })
    
    await expressApp(app);
    
    const newclass = new NewClass();
    await newclass.WriteLog();
    app.listen( port, () => {
        console.log(`server is listening on port ${port}`);
    })
}

StartServer();

