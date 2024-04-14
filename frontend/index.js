'use strict';
const axios = require('axios');

const port = process.env.PORT || 4000;

const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

//cau hinh public static folder
app.use( express.static(__dirname+ '/public'));

app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
    }
}));

app.set('view engine', 'hbs');
//cau hinh doc du lieu post tu body
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

/*
//cau hinh su dung session
app.use( session({
    secret: process.env.SESSION_SECRET,
    store: new redisStore({ client: redisClient}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20 * 60 * 1000 //20ph
    }
}));
*/
//routes
//app.use('/', require('./routes/indexRouter'));
app.use('/Operator', require('./routes/OperatorRouter'));

//khoi dong web server
app.listen(port, () => {
    console.log(`frontend server is running on port ${port}`);
})