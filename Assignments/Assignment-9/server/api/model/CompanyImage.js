const mongoose = require('mongoose');

const companyImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CompanyImage', companyImageSchema);
