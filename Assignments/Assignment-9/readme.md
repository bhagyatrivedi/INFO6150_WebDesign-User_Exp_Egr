# React Job Portal Project

This React Job Portal is designed to provide a seamless job searching experience, offering users the ability to explore job listings, view company profiles, and more. This project is built using React, with optional Material UI for the frontend, and uses Axios for API requests. The backend is constructed with Node.js and Express, supporting features like user authentication, job listings, and company showcases.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React and Node.js.

### Installation

The project is divided into two main parts: the frontend (`client`) and the backend (`server`). You need to set up both parts to run the application correctly.

1. **Frontend Setup**:
   - Navigate to the `client` directory from the project root:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

2. **Backend Setup**:
   - Navigate to the `server` directory from the project root:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the Backend Server**:
   - Inside the `server` directory, run:
     ```bash
     npm start
     ```
   - This will start the Node.js server, typically on `http://localhost:5000`.

2. **Start the Frontend Application**:
   - Open a new terminal window and navigate to the `client` directory, then run:
     ```bash
     npm start
     ```
   - This will launch the React application, usually on `http://localhost:3000`.

## Project Structure

### Client (Frontend)

- **public/**: Contains the public assets like the `index.html` file, icons, and manifest.
- **src/**: Source directory for the React application.
  - **App/**: Contains the main React components for different pages (About, CompanyShowcase, etc.).
  - **AuthContext/**: Provides a context for authentication state across the app.
  - **App.js**: Main application component that includes routing logic.
  - **index.js**: Entry point for the React app.

### Server (Backend)

- **api/**: Houses the Express routes, models, and middleware.
  - **middleware/**: Authentication middleware and other utilities.
  - **model/**: Mongoose models for users and company images.
  - **routes/**: Express routes for handling API requests.
- **config/**: Configuration files, including database configuration.
- **images/**: Directory for storing uploaded company images.
- **server.js**: Entry point for the backend server.

## Features

- **User Authentication**: Supports login functionality using stored usernames and passwords.
- **Job Listings**: Users can explore various job listings with details like job role, required skills, and salary.
- **Company Showcase**: A gallery of company images and names, fetched from the backend.
- **Material UI**: (Optional) Used to enhance the design and user experience with various components.

## Navigation

The application supports navigation between the following main pages:
- Home
- About
- Job Listings
- Contact
- Company Showcase
- Login

Routing is managed using React Router, with a `Navbar` component facilitating navigation across these pages.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with any enhancements, bug fixes, or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
