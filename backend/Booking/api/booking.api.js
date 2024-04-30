'use strict';
const {BookingService} = require('../services/booking.service')

class BookingAPI {
    constructor(){
        this.BookingService = new BookingService();
        this.BookDTO = {};
        this.convertToDTO = (data) =>{
            this.BookDTO.customername  = data.customername;
            this.BookDTO.customerphone = data.customerphone;
            this.BookDTO.taxitype = data.taxitype;
            this.BookDTO.location = data.location;
            this.BookDTO.destination = data.destination;
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
                //check html to dto
                console.log(`input to DTO ${JSON.stringify(this.BookDTO)}`);
                const data = await this.BookingService.Add( this.BookDTO);
                if (data.status = 'success'){
                    res.json(data);
                }
                else {
                    res.status(503).json(data);
                }
            } catch(error){
                console.log({ status: error.status, message: error.message});
            }       
        });

    }
}
module.exports = {
    BookingAPI: BookingAPI
}