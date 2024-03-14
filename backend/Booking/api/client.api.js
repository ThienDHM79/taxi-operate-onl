'use strict'
const sequelize = require('sequelize');
const {ClientService} = require('../services/client.service')


class ClientAPI{
    constructor(){
        this.clientService = new ClientService();
    }
    
    ClientError(app){

        app.use( (req, res, next) => {
            res.status(404).json( {message: 'File not found'});
        })
        app.use( (error, req, res, next) => {
            const logdate = new Date();
            console.error(error);
            res.status(500).json( {message: 'Internal server error'});
        })
    }
    
    ClientAdmin(app){

        app.get('/v1/clients/createTable', async (req,res) => {
            let models = require('../database/models');
            //await sequelize.destroyAll();
            models.sequelize.sync( {alter: true}).then( () => {
                res.send('table created');
            })
        })
    }
    ClientOp(app){
        app.get('/v1/clients', async( req, res) => {
            await res.send("Client home page");
        });

        app.post('/v1/Clients/signup', async (req, res, next) => {
            const {phonenum, password } = req.body;
            const data = await this.ClientService.SignUp( {phonenum, password});
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
            const data = await this.ClientService.SignIn( {phonenum, password});
            res.json({accessToken: data.token});
        })
    }
    
}

//module.exports = { ClientAPI: ClientAPI}
module.exports = {  
    ClientAPI: this.ClientAPI}