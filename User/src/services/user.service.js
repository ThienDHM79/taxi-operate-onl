'use strict';
const {UserRepository} = require('../database/repository/user.repository')
const {ValidatePassword, GenerateSalt, GeneratePassword, GenerateSignature, FormatData } = require('../utils/utils')
class UserService{
    constructor(){
        this.repository = new UserRepository();
    }

    async SignUp(userInputs){
        const {phonenum, password} = userInputs;
        let existingUser = null;
        try{
            existingUser = await this.repository.FindUser(phonenum);
        } catch (error){
            error.status = 404;
            return {status: error.status, message: error.message};
        }
        

        if (existingUser){
            return {status:'duplicated',message: 'user exist!'};
        }
        if (!existingUser){
            //create salt
            let salt = await GenerateSalt();
            try{
                let userPassword = await GeneratePassword(password, salt);
                const newUser = await this.repository.CreateUser({phonenum, password: userPassword, salt:salt});
                const token = await GenerateSignature( {phonenum:newUser.phonenum, _id: newUser.id} );
                return {
                    status: 'success',
                    phonenum: newUser.phonenum,
                    token: token,
                    message: `user created at ${new Date()}`
                };
            } catch(error){
                error.status = 404;
                return {status: error.status, message: error.message}
            }
        }
    }
    async SignIn(userInputs){
        const { phonenum, password } = userInputs;
        const existingUser = await this.repository.FindUser( phonenum );
        console.log(existingUser.phonenum);
        if (existingUser){
            const validPassword = await ValidatePassword(password, existingUser.password, existingUser.salt);
            if (validPassword){
                const token = await GenerateSignature ( { phonenum: existingUser.phonenum, _id: existingUser.id});
                return {status:"found", token: token};
            }
        }
        return null;
    }
}

module.exports = {UserService: UserService};