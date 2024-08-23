const { default: mongoose } = require("mongoose");

 const connectDB = (url) => {
    mongoose.connect(url)
 .then(()=>console.log("MongoDB connected!"))
.catch((err) =>console.log("Mongo Error occured!",err));
 }

 module.exports = {
    connectDB,
 }