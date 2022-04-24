const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

router.post("/register", async(req, res) => {
    const {name, email, password} = req.body

    const newUser = new userModel({name, email, password})

    try{
        newUser.save()
        req.send('User Registered Successfully')
    }
    catch(error){
    
        return res.status(400).json({message: error})
    
    }
});

module.exports = router