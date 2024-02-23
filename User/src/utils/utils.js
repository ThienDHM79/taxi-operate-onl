const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const {
    APP_SECRET,
    EXCHANGE_NAME,
    CUSTOMER_SERVICE,
    MSG_QUEUE_URL,
} = require('../config');

//utility function
module.exports.GenerateSalt = async() => {
    return await bcrypt.genSalt();
};

module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash( password, salt);
};

module.exports.ValidatePassword = async (
    enteredpassword, 
    savedPassword,
    salt
    ) => {
    return (await this.GeneratePassword(enteredpassword, salt)) === savedPassword;
};

module.exports.GenerateSignature = async (payload) => {
    try {
        return await jwt.sign(payload, 'APP_SECRET', { expiresIn: "1d"});
    } catch (error){
        console.log(error);
        return error;
    }
}

module.exports.FormatData = (data) => {
    if (data) {
        return {data};
    } else {
        throw new Error("Data not found");
    }
};
module.exports.VerifyToken = (jwtToken) => {
    jwt.verify(jwtToken, 'APP_SECRECT', (err, decoded) => {
        if (err){
            return {error: true , message: "invalid token"}
        } else{
           return {userId: decoded.userId};
        }
        
    })
}