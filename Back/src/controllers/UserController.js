
const express = require('express')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')
const userService = require("../services/UserService");

exports.createUser = async(req, res)=>{

    try
    {
        const user = await userService.createUser(req.body);
        res.json({ data: user, status: "success" });
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};
exports.althenticateUser= async(req, res)=>{

    try
    {
        const {email,password} = req.body;

        // Validate user input
       if (!(email && password)) {
        res.status(400).send("All input is required");
       }

       const user = await userService.findOne({email}).select('+password');//usamos select para que a senha seja incluida na query
       
       if(!user)
       {
         res.status(400).send({ error: 'User '+email+' not found' });

       }

       if (!await bcrypt.compare(password, user.password))
       {
        res.status(400).send({ error: 'Invalid password' });

       }

       user.password = undefined;// esconde a senha novamente

       // Create token
      const token = jwt.sign(
        { id: user._id, email },
        /*process.env.TOKEN_KEY*/authConfig.secret,
        {
          expiresIn: "5h",
        }
      );// o primeiro parametro representa a informacão que diferencia um usuario de outro
        // o segundo parametro e um hash unico na aplicacão

      // save user token
      user.token = token;



        /*
        const user = await userService.createUser(req.body);
        res.json({ data: user, status: "success" });
        */
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};
exports.getAllUsers = async(req, res)=>{
    
    try
    {
        const user = await userService.getAllUsers(req.body);
        res.json({ data: user, status: "success" });
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};
exports.getUserById = async(req, res)=>{

    try
    {
        const user = await userService.getUserById(req.params.id);
        res.json({ data: user, status: "success" });
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};
exports.updateUser = async(req, res)=>{
    try
    {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json({ data: user, status: "success" });
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};
exports.deleteUser = async(req, res)=>{
    try
    {
        const user = await userService.deleteUsers(req.params.id);
        res.json({ data: user, status: "success" });
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};