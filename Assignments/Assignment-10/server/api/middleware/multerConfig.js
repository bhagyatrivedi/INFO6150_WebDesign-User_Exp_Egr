const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/'); // Make sure this folder exists
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

// Filter for image upload - only allow image mime types
const imageFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
    } else {
        cb(new Error('Only image/png and .gif files are allowed!'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

module.exports = { upload };