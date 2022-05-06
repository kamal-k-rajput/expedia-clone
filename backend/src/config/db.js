const mongoose = require("mongoose");

const connect = ()=>{
return mongoose.connect("mongodb+srv://harsh:harsh@cluster0.ztxe5.mongodb.net/test");
//return mongoose.connect("mongodb://127.0.0.1:27017/test")
}

module.exports = connect;