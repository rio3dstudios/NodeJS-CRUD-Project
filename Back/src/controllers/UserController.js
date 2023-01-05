
const express = require('express')
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