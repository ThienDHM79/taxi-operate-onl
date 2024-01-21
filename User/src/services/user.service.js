'use strict';
const {UserRepository} = require('../database/repository/user.repository')
class UserService{
    constructor(){
        this.repository = new UserRepository();
    }

    async SignUp(userInputs){
        const {phonenum, password} = userInputs;
        const existingUser = await this.repository.FindUser(phonenum);

        if (existingUser){
            return {message: 'user exist!'};
        }
        if (!existingUser){
            try{
                const newUser = await this.repository.CreateUser({phonenum, password});
                return { data:{
                    phonenum: newUser.phonenum, 
                    message: `user created at ${new Date()}`}
                };
            } catch(e){
                throw new Error({error: `error ${e.message}`});
            }
        }
    }
    
}

module.exports = {UserService: UserService};