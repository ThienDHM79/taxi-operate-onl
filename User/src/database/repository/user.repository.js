'use strict';
const sequelize = require('sequelize');
//add more if need more model
const UserModel = require('../models');
class UserRepository{

    async CreateUser({ phonenum, password, salt}){
        try {
            const newUser = await UserModel.User.create({phonenum, password, isactive:true, salt:salt});
            //await UserModel.create({phonenum, password, isactive: true});
            return {phonenum: newUser.phonenum};
        }
        catch(e){
            throw new Error(`${e.message}`);
        }
    }
    async FindUser( phonenum){
        const existingUser = await UserModel.User.findOne({
            where: {
                phonenum: phonenum
            }
        })
        return existingUser;
    }
}

module.exports = {UserRepository : UserRepository} ;