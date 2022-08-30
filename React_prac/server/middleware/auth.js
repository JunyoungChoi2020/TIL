const { User } = require('../model/User')

const auth = ( req, res, next ) => {
    let token = req.cookies.x_auth;

    User.findByToken(token, (err, userInfo) => {
        if(err){return err};
        if(!userInfo){return "No user"}
        req.user = userInfo;
        req.token = token;
        next();
    })

}

module.exports = { auth }
