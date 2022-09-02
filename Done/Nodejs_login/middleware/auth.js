let { users } = require('../models/users');

let auth = (req, res, next) => {
    let token = req.cookies.x_auth;

    users.findByToken(token, (err, user) => {
        if(err){
            return err
        }
        if(!user){
            return res.json({
                isAuth: false,
                error: true
            })
        }
        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = {auth}