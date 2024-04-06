
const {
    APP_SECRET,
    EXCHANGE_NAME,
    CUSTOMER_SERVICE,
    MSG_QUEUE_URL,
} = require('../config');

//utility function

module.exports.FormatTime = (date) => {
    const formatter = new Intl.DateTimeFormat('en-US', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
};

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