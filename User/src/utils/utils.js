module.exports.ValidatePassword = async (enteredpassword, savedPassword) => {
    return enteredpassword === savedPassword;
}