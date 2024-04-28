'use strict';
const {BookingService} = require('../services/booking.service')
const {BaseEmitter} = require('../../Event/BaseEmitter')

class BookingAPI {
    constructor(){
        this.BookingService = new BookingService();
        this.BookDTO = {};
        this.convertToDTO = (data) =>{
            this.BookDTO.customername  = data.customername;
            this.BookDTO.customerphone = data.customerphone;
            this.BookDTO.taxitype = data.taxitype;
            return this.BookDTO;
        };

    }   
    Action(app){
        //start booking server
        app.get('/v1/Booking', async(req,res)=>{
            try{
                const response = await this.BookingService.Get();
                if (response.status = 'success'){
                    res.json(response.data);
                }
                else {
                    res.status(404).json(response);
                }

            }   catch(error){
                    console.log({ status: error.status, message: error.message});
            }  
        })
        // call 3rd party service . not need as api - test first
        app.get('/v1/geolocation', async( req, res ) => {
            
        })
        //create booking request in db. return api json
        app.post('/v1/Booking', async( req, res) => {
            //data validation - pending
            //get req to DTO - pending
            try{
                this.BookDTO = this.convertToDTO(req.body);
                const data = await this.BookingService.Add( this.BookDTO);
                if (data.status = 'success'){
                    res.json(data);
                }
                else {
                    res.status(503).json(data);
                }
                return data;
            } catch(error){
                console.log({ status: error.status, message: error.message});
            }       
        });
        app.post('/v2/Booking', async( req, res ) => {

            
           const CheckDriverAccept = (drivername) => {
            console.log(`driver name is ${drivername}`);
            return  drivername;
           };
            const requestEmitter = new BaseEmitter();
            
            //can begin, can execute. not see 'end'. post not complete - keep hold ???
            requestEmitter.on('begin', () => console.log('received request') );
            requestEmitter.on('end', () => console.log('complete response') );
            requestEmitter.on('data', (data) => console.log(`data here ${data}`) );

            const data = await app.post('/v1/Booking');
            requestEmitter.executeAsync(CheckDriverAccept,"driver 2");
            res.json(data);

        })
    }
}
module.exports = {
    BookingAPI: BookingAPI
}