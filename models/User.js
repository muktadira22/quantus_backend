const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {type: String, trim: true, default: '', required: true},
    password: {type: String, trim: true, default: '', required: true},
    fullName: {type: String, trim: true, default: '', required: true},
    city    : {type: String, trim: true, default: '', required: true},
    status  : {type: String, trim: true, default: '', required: true}
})

module.exports = mongoose.model('User', User);