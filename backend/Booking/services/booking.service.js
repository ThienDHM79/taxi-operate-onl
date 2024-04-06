'use strict';
const utils = require('../utils/utils')
const {BookingRepository} = require('../database/repository/booking.repository')

class BookingService{
    constructor(){
        this.repository = new BookingRepository();
    }

    async Add(operatorInput){
        try {
            const newTrip = await this.repository.Create({
                customername: operatorInput.customername,
                customerphone: operatorInput.customerphone,
                taxitype: operatorInput.taxitype
            });
            return {
                status: 'success',
                tripstatus: 'new',
                log: {
                    "trip":
                    {
                        "message": "created",
                        "updatedAt": utils.FormatTime(new Date())
                    }
                }
            };
        } catch(error){
            error.status = 404;
            return { status: error.status, message: error.message}
        }
    }
}
module.exports = {BookingService: BookingService};