const mongoo = require('mongoose');

const Companyschema = new mongoo.Schema({companyname:String})


const Company = new mongoo.model('stockcompany',Companyschema)

const cmpany = [
    {'companyname':'Dell'},{'companyname':'TCS'},{'companyname':'AMZN'}
]
// Company.remove({})
//Company.insertMany(cmpany)

module.exports = {Company};