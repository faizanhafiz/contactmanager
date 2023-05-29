const mongoose = require("mongoose");

const uri  = "mongodb+srv://root:root@nodedb.wmkycpk.mongodb.net/contact_managerDB?retryWrites=true&w=majority";

console.log(uri);
const connectDB = async()=>{
    try{

       const connect = await mongoose.connect(uri);
       console.log("database is connected ");
       

    }catch(err)
    {
        console.log(err);
    }
}
module.exports=connectDB;


