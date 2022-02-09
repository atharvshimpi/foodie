const jwt = require("jsonwebtoken");

const generateToken = (id, rememberMe) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: `${(rememberMe) ? '8760h' : '1h'}` }) // 1yr === 8760h
}

module.exports = generateToken;