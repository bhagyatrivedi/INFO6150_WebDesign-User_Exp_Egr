# User Management API

## Overview
This User Management API is a Node.js application designed for managing user information in a RESTful manner. It supports operations such as creating, updating, deleting, and retrieving user details, as well as uploading images for users. The project leverages MongoDB for data storage, Express for routing, and implements security best practices including bcrypt for password hashing and multer for file handling with specific format validations.

## Getting Started

### Prerequisites
- Node.js (version 12.x or higher)
- MongoDB (version 4.x or higher)
- Postman (for API testing)

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
Ensure MongoDB is running on your local machine.
Start the application by running:
bash
Copy code
npm start
or
bash
Copy code
node server.js
API Endpoints
Create User
POST /user/create
Creates a new user with full name, email, and password.
Update User Details
PUT /user/edit
Allows updating the user's full name and password. Email is not updatable.
Delete User
DELETE /user/delete
Deletes a user by their email.
Retrieve All Users
GET /user/getAll
Retrieves all users' information from the database.
Upload Image
POST /user/uploadImage
Allows users to upload an image file. Accepts JPEG, PNG, and GIF formats.
Testing the API
Utilize Postman to test the API endpoints. Ensure to set the request type accordingly and provide the required information in the request body or as form-data for file uploads.

Configuration
Configure your MongoDB URI in the config/default.json file.
Ensure the images directory exists within the project directory for image uploads.
Additional Information
Passwords are securely hashed using bcrypt.
Uploaded images are stored in the images directory, and their paths are saved in the database.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

