'use strict'
const sequelize = require('sequelize');
const {UserService} = require('../services/user.service')


class UserAPI{
    constructor(){
        this.userService = new UserService();
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
        })
    }
    UserOp(app){
        app.get('/v1/users', async( req, res) => {
            await res.send("user home page");
        });

        app.post('/v1/users/signup', async (req, res, next) => {
            const {phonenum, password } = req.body;
            const data = await this.userService.SignUp( {phonenum, password});
            if (data.status == 'duplicated'){
                return res.status(409).json(data);
            }
            if (data.status == 'success'){
                return res.status(201).json(data);
            }
            else{
                return res.status(503).json(data);
            }
        })
        app.post('/v1/users/login', async(req, res, next)=>{
            const {phonenum, password} = req.body;
            const data = await this.userService.SignIn( {phonenum, password});
            res.json(data);
        })
        
    }
    
}

//module.exports = { UserAPI: UserAPI}
module.exports = {  
    UserAPI: UserAPI}