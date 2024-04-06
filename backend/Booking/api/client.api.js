'use strict'
const sequelize = require('sequelize');
const {ClientService} = require('../services/client.service')


class ClientAPI{
    constructor(){
        this.clientService = new ClientService();
    }
    
    ClientAdmin(app){

        app.get('/v1/createTable', async (req,res) => {
            let models = require('../database/models');
            //await sequelize.destroyAll();
            models.sequelize.sync( {alter: true}).then( () => {
                res.send('table created');
            })
        })
    }
    ClientOp(app){
        //get client list
        app.get('/v1/clients', async( req, res) => {
            const Clients = await this.clientService.getAll(true);
            res.json(Clients);
        });
        //create client 
        app.post('/v1/client/', async (req, res, next) => {
            const {fullname , phonenum} = req.body;
            const data = await this.clientService.Add( {fullname, phonenum});
            if (data.status == 'duplicated'){
                res.status(409).json(data);
            }
            if (data.status == 'success'){
                res.status(201).json(data);
            }
            else{
                res.status(503).json(data);
            }
        })
        app.post('/v1/Clients/login', async(req, res, next)=>{
            const {phonenum, password} = req.body;
            const data = await this.clientService.SignIn( {phonenum, password});
            res.json({accessToken: data.token});
        })
    }
    
}

//module.exports = { ClientAPI: ClientAPI}
module.exports = {  
    ClientAPI: ClientAPI}