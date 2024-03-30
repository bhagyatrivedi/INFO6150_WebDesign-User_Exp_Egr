# React Job Portal

This project is a comprehensive job portal developed using React, with an optional use of Material UI for styling, and Axios for making API requests. The portal offers a user-friendly interface for job seekers to explore job listings, company profiles, and more.

## Prerequisites

Before you begin, ensure you have both Node.js and npm installed on your machine.

## Installation

The project consists of two main parts: the client (React frontend) and the server (Node.js backend). You need to install dependencies for both.

1. **Client**:
    ```bash
    cd client
    npm install
    ```

2. **Server**:
    ```bash
    cd server
    npm install
    ```

## Running the Application

1. **Start the Server**:
    - Navigate to the server directory:
        ```bash
        cd server
        ```
    - Run the server using:
        ```bash
        npm start
        ```
    - The server will typically run on `localhost:5000`.

2. **Start the Client**:
    - Open a new terminal and navigate to the client directory:
        ```bash
        cd client
        ```
    - Start the React application with:
        ```bash
        npm start
        ```
    - The app will run on `localhost:3000` by default.

## Project Structure

- **client/**: React frontend application.
    - **public/**: Contains public assets like favicon, index.html, etc.
    - **src/**: Source files.
        - **App/**: Components and pages (Home, About, Job Listings, etc.).
        - **AuthContext/**: Context for authentication state.
        - **App.js**: Root component with routing.
        - **index.js**: Entry point.

- **server/**: Node.js backend server.
    - **api/**: API endpoints and middleware.
        - **middleware/**: Middleware functions.
        - **model/**: Mongoose models.
        - **routes/**: Route definitions.
    - **config/**: Database and other configuration files.
    - **images/**: Uploaded images.
    - **server.js**: Entry point for the server.

## Features

- **Login and Session Management**: Implements login using stored usernames and passwords and manages session states.
- **Job Portal Pages**: Home, About, Job Listings, Contact, Company Showcase.
- **Job Listings**: Dynamically lists jobs using provided data.
- **Company Showcase**: Displays company images sourced from the backend.

## Material UI Components

While the use of Material UI is optional for this assignment, it's recommended for enhancing the design and user experience. Components like navigation bars, buttons, cards, and form elements can significantly improve the interface.

## Version Control

A `.gitignore` file is included to exclude `node_modules` and other non-essential files from version control. Ensure the project is maintained within a Git repository for effective version management.

## Additional Notes

For API requests, Axios is utilized to ensure efficient communication between the frontend and backend. Detailed instructions and examples for using Axios can be found [here](https://www.youtube.com/watch?v=12l6lkW6JhE).

## License

This project is open-sourced under the [MIT license](LICENSE).
