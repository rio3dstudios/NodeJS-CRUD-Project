const jwt = require('jsonwebtoken');
const jwt_decoder = require('jwt-decode'); // For classic node.js
const authConfig = require('../config/auth')

module.exports = (req,res,next) =>{


    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({error:'No token provided'});

    const parts = authHeader.split(' ');

    if(!parts.lenght==2)
      return res.status(401).send({error:'Token error'});


      const [ scheme, token] = parts;

     // console.log("parts: "+parts);


      if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error:'Token malformatted'});
    

         jwt.verify(token,authConfig.secret,(err,decoded)=>{

        if(err) return res.status(401).send({error:'Token invalid'});

        var decoded = jwt_decoder(token); // Decoding

        console.log(decoded); // Dictionary array

        req.userId = decoded.params.id;

        console.log("user: "+decoded.params.id);

        return next();
    });

};