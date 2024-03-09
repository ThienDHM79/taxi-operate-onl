'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.send("hello frontend");
})

app.listen(port, () => {
    console.log(`frontend server is running on port ${port}`);
})