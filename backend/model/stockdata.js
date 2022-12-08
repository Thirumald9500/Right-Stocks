const mongoose = require('mongoose');

const {Schema} = mongoose;

const Stocks = new Schema({
    nameofstock:String,
    buyingprice:Number,
    quantity:Number,
    amount:Number,
    sellingprice:Number
})

const Stock = mongoose.model('stock',Stocks);

module.exports = {Stock}