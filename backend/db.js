const mongoose = require("mongoose");
//const mongoURI = "mongodb://localhost:27017";

mongoose
  .connect("mongodb://127.0.0.1:27017/EasyGo?directConnection=true&ssl=false&readPreference=primary&appname=MongoDB%20Compass")
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
  // const mongoose = require('mongoose');
  // const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true&ssl=false&readPreference=primary&appname=MongoDB%20Compass"
  // const connectToMongo = async()=>{
  //     await mongoose.connect(mongoURI);
  //          console.log("connected to Mongo SuccessFully");
      
  // }
  // module.exports=connectToMongo