
const express = require('express');

exports.openDashboard = async(req, res)=>{

    try
    {
       res.send({ok:true, user: req.userId});
    }
    catch (err)
    {
       res.status(500).json({ error: err.message });
    }
    
};