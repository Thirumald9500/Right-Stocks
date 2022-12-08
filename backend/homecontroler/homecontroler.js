const {User} = require('../model/users');
const {Company} = require('../model/stockcompany')
const crypto = require("cryptr");
const cryptr = new crypto('myTotallySecretKey');
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const mongoose = require('mongoose');



const home = async(req,res) =>{
    res.send('welcome bro server started')

}

const register = async(req,res) => {
    let columns = ['name','email','password']
    let data = req.body;
    console.log(data,'registerhit')
    columns.forEach(element => {
        if(data[element] == '' || !(element in data)){
            res.status(200).json({'status':'failure','err':element+" is null"});
        }
    });
    //let email1 = data['email'];
    let email = await User.findOne({'email':data['email']})
    console.log(email)
    if(email != null){
        res.status(200).json({'status':'failure','err':'email already present'});
    }else{
        data['password']=cryptr.encrypt(data['password']);
        let res_data = await User.create(data)
        res.status(200).json({'status':'success','err':''});
    }
}

const login = async(req,res) => {
    console.log('in backend')
   res.setHeader('Content-Type', 'text/plain');
   console.log(req.body);
    let columns = ['email','password']
    let data = req.body
    columns.forEach(element => {
        if(data[element] == '' || !(element in data)){
            return res.status(200).header().json({'status':'failure','err':element+" is null"});
        }
    });
    let user = await User.findOne({where:{email:data['email']}})
    if(user != null){
        if(!(data['password'] == cryptr.decrypt(user.password))){
            return res.status(200).header().json({'status':'failure','err':'email or Password is wrong'});
        }
        const token = jwt.sign({id: user.email}, config.TOKEN_SECRETE,{expiresIn: "2h"});
        user.token = token;
        user.save();
        
        
        return res.status(200).json({'status':'success','err':'authunticated','data':{'name':user.name,'token':user.token}})
    }else{
        res.status(200).header().json({'status':'failure','err':'Email or Password is wrong'});
    }
}

const home2 = async(req,res) => {
    console.log('loged');

}

const companydetails = async(req,res)=>{
    let compny = await Company.find()
    res.send(compny)
}

const stock_data = async(req,res)=>{
    let data = req.body;
    console.log(data,'inend');
}

module.exports = {home,register,login,home2,companydetails,stock_data}