// require ('dotenv').config({path: '../.env'})

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/constructDaily');

// console.log(process.env.TESTSTRING)

module.exports = mongoose.connection;