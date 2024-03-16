'use strict';
const {UserAPI} = require('./client.api')
const {authenticateToken} = require('../utils/utils');
class OperatorAPI {
    constructor(email,firstname, lastname, gender){
        this.email = email;
        this.type = "operator";
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
    }   
    OperatorAction(app){
        app.post('/v1/operators', async(req,res)=>{
            res.json({message:"operator api online"});
        })
        app.post('/v1/operators/profile',authenticateToken, async(req, res, next) => {
            if (!req.user){
                res.status(401).json( {status: "not authorized", message: "no login session found"})
            }
            if (req.user){
                //test receive first. not for logging
                console.log(req.user);
                const OperatorProfile = req.body;
                this.type = "operator";
                const OperatorProfileData = await this.userService.UpdateProfile(req.user._id, OperatorProfile, this.type);
                if (OperatorProfileData.status){
                    res.json({message: OperatorProfileData.message})
                }
                res.json({status: "success", message:"operators/profile"})
            }               
                
            }
            
        )
    }
}
module.exports = {
    OperatorAPI: OperatorAPI
}