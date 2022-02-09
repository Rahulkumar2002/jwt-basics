const mongoose = require('mongoose')
const connectToDB = async (passedUrl) => {
    try {
        await mongoose.connect(passedUrl)
        console.log("Connected to DB");
    } catch (err) {
        console.log(err)
    }
}

module.exports = { connectToDB }