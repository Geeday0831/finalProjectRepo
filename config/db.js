const mongoose = require('mongoose');
/* require(dotenv).config(); */

/* creating a conection for the database */

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
        
        });
        console.log(`mongoDB conected: ${conn.Connection.name}`);
    }catch(err){
        console.error(`error : ${err.message}`);
        process.exit(1);
    } 
};

module.exports = connectDB;