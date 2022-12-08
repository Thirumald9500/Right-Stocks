const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');
const cors = require('cors');
const methods = require("methods");
const auth = require('./middelware/authen');
const homecontroler = require('./homecontroler/homecontroler.js')

router.use(bodyparser.urlencoded({extended:true}));
var jsonparser = bodyparser.json();

router.use(cors({
    origin:["http://localhost:3000","http://127.0.0.1:3000"],
    methods:['GET','POST'],
    credentials:true
}))

router.get('/',homecontroler.home);
router.post('/register',jsonparser,homecontroler.register);
router.post('/login',jsonparser,homecontroler.login);
router.get('/companydetails',homecontroler.companydetails);
router.post('/stockdata',jsonparser,homecontroler.stock_data);


//athunticated
//router.post('/home2',auth,homecontroler.home2);


module.exports = router;