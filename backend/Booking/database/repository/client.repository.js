'use strict';
const sequelize = require('sequelize');
//add more if need more model
const ClientModel = require('../models');
class ClientRepository{

    async Create({ firstname, phonenum}){
        try {
            const newClient = await ClientModel.Client.create({firstname, phonenum});
            //await ClientModel.create({phonenum, password, isactive: true});
            return newClient.dataValues;
        }
        catch(e){
            throw new Error(`${e.message}`);
        }
    }
    async Find( phonenum){
        const existingClient = await ClientModel.Client.findOne({
            where: {
                phonenum: phonenum
            }
        })
        return existingClient;
    }
    async Update( ClientId, ClientInputs, ClientType){
        try {
            const result = await ClientModel.Client.update({
                firstname: ClientInputs.firstname,
                lastname: ClientInputs.lastname,
                Clienttype: ClientType,
                detailsinfo: ClientInputs.detailsinfo,
                updatedAt: new Date()
            },{
                where: {
                    id: ClientId
                }
            });
            return await ClientModel.Client.findByPk(ClientId);
        } catch (error){
            console.log(error.message);
            return {error: true, message: error.message};
        }
        
    }
}

module.exports = {ClientRepository : ClientRepository} ;