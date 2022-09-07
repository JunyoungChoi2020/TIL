const express = require('express');
const User = require('../schemas/User');

const auth = async (req, res, next) => {
    const token = req.cookie.tokenForClient;

    await User.findByToken(token, function(err, userInfo){
        if(err){return err};
        if(!userInfo){return "No user"}
        req.user = userInfo;
        req.token = token;
        next();
    })
}

module.exports = { auth };