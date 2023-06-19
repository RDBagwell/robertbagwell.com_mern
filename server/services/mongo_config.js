const mongoose = require('mongoose');

mongoose.connection.once('open', ()=>{
    console.log("MongoDB connection is ready");
});

mongoose.connection.once('error',(err)=>{
    console.error(err);
});


const MONGO_URL = process.env.MONGO_URL;

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}