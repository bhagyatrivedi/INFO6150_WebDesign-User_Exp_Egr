const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    salary:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Company', Company);