'use strict';
const {ClientRepository} = require('../database/repository/client.repository')
class ClientService{
    constructor(){
        this.repository = new ClientRepository();
    }

    async Add(userInputs){
        //const {fullname, phonenum} = userInputs;
        let existingUser = null;
        try{
            existingUser = await this.repository.Find(userInputs.phonenum);
        } catch (error){
            error.status = 404;
            return {status: error.status, message: error.message};
        }
        

        if (existingUser){
            return {status:'duplicated',message: 'user exist!'};
        }
        if (!existingUser){
            try{
                const newClient = await this.repository.Create(
                    {
                        firstname: userInputs.fullname, 
                        phonenum: userInputs.phonenum 
                    });
                return {
                    status: 'success',
                    phonenum: newClient.phonenum,
                    message: ` created at ${new Date()}`
                };
            } catch(error){
                error.status = 404;
                return {status: error.status, message: error.message}
            }
        }
    }
}

module.exports = {ClientService: ClientService};