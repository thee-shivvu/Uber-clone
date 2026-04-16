const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("MongoDB Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Failed", err))
}

module.exports = connectToDB