'use strict';
const {BaseEmitter} = require('../BaseEmitter');
class DriverConsumer extends BaseEmitter{
    async listener(){
        this.on('begin', () => console.log('received request') );
        this.on('end', () => console.log('complete response') );
        this.on('data', async (data) => await console.log(`data here ${data}`) );
    }
    //requestEmitter.executeAsync(CheckDriverAccept,{sent: data,received});
}

module.exports = { DriverConsumer: DriverConsumer};