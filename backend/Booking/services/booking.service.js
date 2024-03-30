'use strict';
const {BookingRepository} = require('../database/repository/booking.repository')
class BookingService{
    constructor(){
        this.repository = new BookingRepository();
    }
}
module.exports = {BookingService: BookingService};