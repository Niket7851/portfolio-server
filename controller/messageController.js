const express = require('express')
const UserModel = require('../Model/userModel')
const expressAsyncHandler = require('express-async-handler')
const userModel = require('../Model/userModel')
const messageController = expressAsyncHandler (async (req, res) =>{
    console.log("body-->",req.body)
    const{name, email, message} = req.body;

    if(!name || !email || !message){
        res.status(405);
        throw Error("All necessory input field have not been field")
    }
    const user = await userModel.create({name, email, message});
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            message: user.message,
        })
    }
    else{
        res.status(400)
        throw new Error("Message sent failed")
    }
})

module.exports ={messageController};