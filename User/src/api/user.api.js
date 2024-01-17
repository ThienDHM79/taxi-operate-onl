class UserAPI{

    async UserTableCreate(app){
        app.get('/createTable', (req,res) => {
            let models = require('../database/models');
            models.sequelize.sync().then( () => {
                res.send('table created');
            })
        } )
    }

}

module.exports = { UserAPI: UserAPI}