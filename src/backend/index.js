import express  from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const App=express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.text())
App.use(cors())

mongoose.connect('mongodb://localhost/bank')
.then(()=>console.log('connected'))
.catch((e)=>console.log('error'))
const port=process.env.PORT||2000;

App.listen(port,()=>{console.log(`server runs @2000 ${port}`)})

