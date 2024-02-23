const {UserAPI} = require('./user.api')
class OperatorAPI extends UserAPI{
    contructor(email,firstname, lastname, gender){
        this.email = email;
        this.type = "operator";
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;

        super();//use the service same as userapi
    }   
    OperatorAPI(app){
        app.post('/v1/users/profile', async(req, res, next) => {
            if (!res.session.token){
                res.status(401).json( {status: "not authorized", message: "no login session found"})
            }
            if (res.session.token){
                const UserData = await this.userService.GetUserFromToken(res.session.token);
                if (UserData.error == true){
                    res.status(401).json( {message: UserData.message})
                }
                else{
                    req.userId = UserData.userId;
                }
            }

            if(req.userId){
                const OperatorProfile = {email, firstname, lastname, gender};
                OperatorProfile = req.body;
                this.type = "operator"
                const OperatorProfileData = await this.userService.UpdateProfile(req.userId, OperatorProfile, this.type);
                
            }
            
        })
    }
}