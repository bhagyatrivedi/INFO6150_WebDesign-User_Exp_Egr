
## Introduction

This project demonstrates a full-stack web application designed to manage user roles and job postings. It employs Redux for efficient state management in a React-based frontend, paired with a Node.js/Express backend. The application distinguishes between admin and employee users, offering distinct functionalities for each role.

## Prerequisites

- **Node.js**: Version 12.x or above is required to ensure compatibility with the syntax and dependencies used.
- **MongoDB**: Version 4.x or above for the database. Ensure MongoDB is running on the default port.
- **Web Browser**: A modern web browser is required to interact with the frontend.

## Installation

1. **Repository Cloning**: Clone this repository to obtain the latest version of the code.
2. **Backend Setup**:
   - Navigate to the `server` directory.
   - Execute `npm install` to install all necessary dependencies.
   - Start the server with `npm start`. The server runs on `http://localhost:5000` by default.
3. **Frontend Setup**:
   - Navigate to the `client` directory.
   - Run `npm install` to install React and other frontend dependencies.
   - Start the React development server using `npm start`. The client will be available at `http://localhost:3000`.

## File Structure

The project is divided into `client` and `server` directories, encapsulating the frontend and backend code, respectively.

### Client

- **src/**: Contains all React components, Redux actions, and reducers.
  - **actions/**: Redux actions for dispatching purposes.
  - **reducers/**: Redux reducers for state management.
  - **App/**: Houses React components for each page or functional unit.
- **public/**: Hosts the `index.html` file and any public assets.

### Server

- **api/**: Contains Express routes, middleware, and models.
  - **middleware/**: Express middleware for authentication and file handling.
  - **model/**: Mongoose models for database schemas.
  - **routes/**: Defines API endpoints.
- **config/**: Configuration files, including database connection settings.
- **images/**: Directory for storing uploaded images or static files.

## Features & Functionalities

### Admin Portal

- **User Management**: Create and view all users, specifying each user's role as either "employee" or "admin".
- **Job Postings**: Admin users can create job postings, which are stored in the database and can be viewed by employees.

### Employee Portal

- **Job Viewing**: Employees can view a list of available jobs posted by the admin.

## API Endpoints

Detailed documentation for each API endpoint, including request methods, URL parameters, and expected responses.

### User Management

- **Create User (`POST /user/create`)**: Creates a new user. Requires full name, email, password, and user type ("employee" or "admin").
- **Get All Users (`GET /users`)**: Retrieves all user details, excluding passwords, for admin use.

### Job Management

- **Create Job (`POST /create/job`)**: Allows admins to create new job listings with details such as company name, job title, and salary.
- **Get Jobs (`GET /get/jobs`)**: Employees can fetch the list of jobs posted by admins.

## Running the Project

Describes how to start both the backend server and the frontend client, including navigating through the application's functionalities.

## Contributing

Outlines steps for contributing to the project, including forking, feature branching, and pull requests.

## License

Specifies the license under which the project is released, typically MIT License.
