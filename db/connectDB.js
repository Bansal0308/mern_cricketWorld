const mongoose = require("mongoose");
require("dotenv").config();



function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(function () {
        console.log("DB connected");
    })
    .catch(function (err) {
        console.error("Error connecting to MongoDB:", err);
    });

}

module.exports = connectDB