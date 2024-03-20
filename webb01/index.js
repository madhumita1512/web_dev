const express =require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const eventModel = require('./Models/Student')

const app =express ()
app.use(express.json())
app.use(cors())


 mongoose.connect("mongodb://127.0.0.1:27017/RegistrationForm");

 app.post ('/signin',(req,res)=>{
    eventModel.create(req.body)
    .then(students=>res.json(students))
    .catch(err=> res.json(err))
 })
 app.listen(3002, ()=>{
    console.log("listening")
 })