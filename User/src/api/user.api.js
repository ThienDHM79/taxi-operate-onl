'use strict'
const sequelize = require('sequelize');
class UserAPI{
    constructor(phonenum){
        this.phonenum = phonenum + ' from-user';
    }
    UserError(app){

        app.use( (req, res, next) => {
            res.status(404).json( {message: 'File not found'});
        })
        app.use( (error, req, res, next) => {
            const logdate = new Date();
            console.error(error);
            res.status(500).json( {message: 'Internal server error'});
        })
    }
    UserAdmin(app){


        app.get('/v1/users/createTable', async (req,res) => {
            let models = require('../database/models');
            //await sequelize.destroyAll();
            models.sequelize.sync( {alter: true}).then( () => {
                res.send('table created');
            })
        });
    }
    UserOp(app){
        app.get('/v1/users', async( req, res) => {
            await res.send("user home page");
        });

        app.get('/signup', async (req, res, next) => {

        })
    }
    
}
class Customer extends UserAPI{
    constructor(phonenum, address){
        super(phonenum);
        this.address = address;
    }
    
}

//module.exports = { UserAPI: UserAPI}
module.exports = {  
    UserAPI: UserAPI,
    Customer: Customer}