const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

function generateToken(params ={})
{
    return jwt.sign(
        { params },
        authConfig.secret,//process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

}

module.exports.generateToken = generateToken;