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
        return await jwt.sign(payload, 'APP_SECRET', { expiresIn: '1d'});
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
module.exports.authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, 'APP_SECRET', (err, decoded) => {
        if (err){
            console.log(err);
            return res.sendStatus(403);
        }
           req.user = decoded
        })
    next();
}