'use strict';
const {UserRepository} = require('../database/repository/user.repository')
class UserService{
    constructor(){
        this.repository = new UserRepository();
    }

    async SignUp(userInputs){
        const {phonenum, password} = userInputs;
        try{
            const existingUser = await this.repository.FindUser(phonenum);
        } catch (error){
            error.status = 404;
            return {status: error.status, message: error.message};
        }
        

        if (existingUser){
            return {status:'duplicated',message: 'user exist!'};
        }
        if (!existingUser){
            try{
                const newUser = await this.repository.CreateUser({phonenum, password});
                return {
                    status: 'success',
                    phonenum: newUser.phonenum,
                    message: `user created at ${new Date()}`
                };
            } catch(error){
                error.status = 404;
                return {status: error.status, message: error.message}
            }
        }
    }
    
}

module.exports = {UserService: UserService};