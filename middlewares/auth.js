const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../constants');

function auth(req, res, next) {
    const token = req.cookies.token;
    if (token) {
        try {
            const verifyResult = jwt.verify(token, JWT_SECRET)
            req.user = {
                email: verifyResult.email
            }
            next();
        } catch (e) {
            return res.json({message: "Нет доступа "})
        }
    } else {
        return res.json({message: "Нет доступа "})
    }

}

module.exports = auth;