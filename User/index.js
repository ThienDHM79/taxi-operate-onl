'use strict';
require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

app.use( express.static(__dirname + '/public' ));
app.use( express.json());
app.use( express.urlencoded( { extended: false }));

app.use('/', (req, res) => {
    res.json('main page');
})

app.listen( port, () => {
    console.log(`server is listening on port ${port}`);
})