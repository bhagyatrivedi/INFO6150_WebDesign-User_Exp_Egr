const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    },
    type: { 
        type: String,
        required: true,
        enum: ['employee', 'admin'] 
    }
});

module.exports = User = mongoose.model('user', UserSchema);
