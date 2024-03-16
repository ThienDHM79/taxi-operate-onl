
const {
    APP_SECRET,
    EXCHANGE_NAME,
    CUSTOMER_SERVICE,
    MSG_QUEUE_URL,
} = require('../config');

//utility function



module.exports.ValidatePassword = async (
    enteredpassword, 
    savedPassword,
    salt
    ) => {
    return (await this.GeneratePassword(enteredpassword, salt)) === savedPassword;
};



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