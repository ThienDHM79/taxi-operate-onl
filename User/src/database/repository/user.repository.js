'use strict';
const sequelize = require('sequelize');
//add more if need more model
const UserModel = require('../models');
class UserRepository{

    async CreateUser({ phonenum, password, salt}){
        try {
            const newUser = await UserModel.User.create({phonenum, password, isactive:true, salt:salt});
            //await UserModel.create({phonenum, password, isactive: true});
            return newUser.dataValues;
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
    async UpdateUser( {userId, userInputs, userType}){
        try {
            const result = await UserModel.User.update({
                firstname: userInputs.firstname,
                lastname: userInputs.lastname,
                usertype: userType,
                detailsinfo: userInputs.detailsinfo,
                updatedAt: new Date()
            },{
                where: {
                    id: userId
                }
            });
            return await UserModel.User.findByPk(userId);
        } catch (error){
            console.log(error.message);
            return {error: true, message: error.message};
        }
        
    }
}

module.exports = {UserRepository : UserRepository} ;