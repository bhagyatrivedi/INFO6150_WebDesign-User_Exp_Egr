const express = require('express')
const router = express.Router();
const cors = require('cors');
const { upload } = require('../middleware/multerConfig'); // Adjust the path as necessary


const {check, validationResult} = require('express-validator');

const User = require('../model/User');

const bcrypt = require('bcryptjs');

router.use(cors());

router.post('/user/create', 
[
    check('fullName', 'Please enter your full name!').not().isEmpty(),
    check('email', 'Please enter a valid northeastern email ID!').isEmail().contains('@northeastern.edu'),
    check('password', 'Please a valid strong password. Requirements -  1 Upper Case Letter, 1 special Character, 1 number and 8 or more characters!').isStrongPassword(),
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullName, email, password} = req.body;

    try {
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({errors: [{msg: `User with email ${email} already exists!`}]});
        }

        user = new User({
            fullName, 
            email,
            password,
        });
        
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        
        res.status(200).send(`User - ${email} registered successfully!`);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
}
);

router.put(
    '/user/edit',
    [
      check('fullName', 'Full Name is required').not().isEmpty(),
      check(
        'password',
        'Please enter a valid (strong) password. Requirements -  1 Upper Case Letter, 1 special Character, 1 number and 8 or more characters'
      ).isStrongPassword(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { fullName, email, password } = req.body;
  
      try {
        const user = await User.findOne({ email });
  
        if (!user) {
          return res.status(404).json({
            errors: [
              {
                msg: `No user found with email ${email}. Please enter a valid email ID`,
              },
            ],
          });
        }
  
        const updatedUser = user;
  
        if (fullName) updatedUser.fullName = fullName;
        if (password) updatedUser.password = password;
  
        await user.updateOne({
          $set: {
            fullName: updatedUser.fullName,
            password: updatedUser.password,
          },
        });
  
        await user.updateOne({
          $set: { updated: true },
        });
  
        res.status(200).json(`User details updated for ${email}`);
      } catch (error) {
        res.status(500).json(error.message);
      }
    }
  );


  router.delete(
    '/user/delete',
    [
      check('fullName', 'Full Name should not be entered').isEmpty(),
      check('email', 'Please enter a valid northeastern email ID')
        .isEmail()
        .contains('@northeastern.edu'),
      check('password', 'Please do not enter password').isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (!user) {
          return res.status(400).json({ errors: [{ msg: 'User not found!' }] });
        }
  
        await User.deleteOne({ email });
        return res.status(200).json('User deleted successfully!');
      } catch (error) {
        console.log(error.message);
        res.status(500).json('server Error');
      }
    }
  );

  router.get('/user/getAll', async (req, res) => {
    try {
      const users = await User.find({});
  
      if (!users) {
        return res.status(404).json(`No users found in the Database!`);
      }
  
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });
  
  router.post('/user/uploadImage', upload.single('image'), async (req, res) => {
    const { email } = req.body; // Assuming the email is provided to identify the user

    if (!req.file) {
        return res.status(400).send('No image file uploaded.');
    }

    try {
        // Update the user document with the image path
        const updatedUser = await User.findOneAndUpdate(
            { email: email }, 
            { imagePath: req.file.path }, // req.file.path contains the path to the saved image
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).send(`User - ${email} not found.`);
        }

        res.status(200).json({
            message: 'Image uploaded successfully!',
            imagePath: updatedUser.imagePath
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
