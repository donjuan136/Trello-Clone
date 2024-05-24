import express from "express";
import {createServer} from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
//create http server
const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer)

app.get("/", (req,res) =>{
    res.send("Api is Build")
})  

//check our socket connetion is working
//after app we can write
//first parameter "connection" second paramater inside socketio this is default action we have our callback ""
io.on('connection',()=>{
    console.log("connected socket io");
    //socket is working for us because we just set it up on the backend but not on client
    //but this is way how we will we write our socket code on the backend
})

//created mongoose
//the main idea is that inside your web server, you will do some request to the database and if database is not ready yet, the we can't do this request. which actually means every single time we want to
//be sure that mongodb is there, connection is established and only after this we're starting our web server.
//this is way here what i want to write after our socket io we can create mongoose.
//method connect mongodb
mongoose.connect('mongodb://localhost:27017/trello-clone').then(()=>{
    console.log("success connected databases");
    
    //now inside we can first of all write that we successfully connected to our databases
})   //this is promise need .then()
//check mongoose running on port local host type 'mongo' in terminal and again type db.getMongo()
//inside container connect(mongodb://localhost:27017/) you can write here any name and it will be created example /trello-clone


httpServer.listen(4000, ()=>{ //we have a callback that our web server is successfully started
    console.log("hello website ini berjalan di 4000" );
    
})

