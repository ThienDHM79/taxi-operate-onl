const {UserAPI} = require('./user.api')
class CustomerAPI extends UserAPI{
    contructor(email,firstname, lastname, gender){
        this.email = email;
        this.type = "customer";
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;

        super();//use the service same as userapi
    }   
    
}