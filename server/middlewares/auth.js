const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const isUserLoggedIn = async (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            let token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(decode.id)
            next();
        } catch (error) {
            if(!token) {
                res.status(401);
                throw new Error("Authorization Required!")
            }
        }
    }
}

module.exports = isUserLoggedIn;