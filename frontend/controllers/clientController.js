'use strict';
let controller = {};
const axios = require('axios');
const baseUrl = 'http://localhost:7000/v1/clients';
const getDataAxios = async (apiUrl) => {
    const response =  await axios.get(apiUrl);
    return response.data;
 
};

controller.getData = async (req, res, next) => {
    //const clientsData = await getDataAxios(baseUrl);
    const ClientsData = await getDataAxios(baseUrl);
    res.locals.clients = ClientsData;
    next();
}
controller.show = async (req, res) => {
    res.render('client');
}

module.exports = controller;
