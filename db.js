const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://sethsamrat:27092410@cluster0.mzjcy.mongodb.net/Buttercrust"

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB conncection successful');
})

db.on('error', ()=>{
    console.log('Mongo DB conncetion failed');
})

module.exports=mongoose