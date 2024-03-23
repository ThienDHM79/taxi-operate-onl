'use strict';
let controller = {};
const getData = async (apiUrl) => {
    const response =  await axios.get(apiUrl);
    return response.data;
 
};
controller.getData = async (req, res, next) => {
    
}
controller.show = async (req, res) => {
    res.render('index');
}

module.exports = controller;
