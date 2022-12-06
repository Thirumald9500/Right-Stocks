const express = require("express");
const home = require('./route.js');
const db = require("./model/database")

const app = express();

app.use('/',(home))

const host = 'http://127.0.0.1:3000';

app.listen(3001,()=>{
    console.log("server started : " + host)
})