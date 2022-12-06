const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/sharemarket').then((res)=>{
    console.log(res);
    console.log('connected')
}).catch((err)=>{
    console.log(err); 
})

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.qvydko4.mongodb.net/chatApp?retryWrites=true&w=majority`,
// { useNewUrlParser: true, useUnifiedTopology: true },()=>{
//     console.log("connected to mongodb");
// })