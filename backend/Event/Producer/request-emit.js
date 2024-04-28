'use strict';
const {BaseEmitter} = require('../BaseEmitter');
const RequestEmitter = new BaseEmitter();

//wait for driver accept
//DriverConsumer.execute(CheckDriverAccept, data);
module.exports = {
    RequestEmitter: RequestEmitter
}