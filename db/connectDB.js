const mongoose = require("mongoose");
require("dotenv").config();



function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
    .connect("mongodb+srv://anurag0235be21:dEavpq3nOLwmIRWx@cluster0.lkfaqrc.mongodb.net/anurag?retryWrites=true&w=majority&appName=Cluster0/anurag", { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(function () {
        console.log("DB connected");
    })
    .catch(function (err) {
        console.error("Error connecting to MongoDB:", err);
    });

}

module.exports = connectDB