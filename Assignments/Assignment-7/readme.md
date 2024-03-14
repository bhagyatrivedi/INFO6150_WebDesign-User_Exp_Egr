# Assignment - 7, JQuery - Calculator and StopWatch

This repository contains two separate web applications as part of the assignment: a simple calculator and a stopwatch application. Below are the instructions on how to use and test each part of the assignment, along with details on the functionalities implemented using JavaScript, HTML, and CSS.

## Part A: Simple Calculator Web Application

### Overview

The Simple Calculator Web Application is designed using jQuery and features a login page followed by a calculator interface that supports basic arithmetic operations.

### HTML Functionalities

- **Forms**: Utilizes `<form>` elements for capturing user inputs on the login and calculator pages.
- **Input Validation**: Leverages `type="email"`, `type="password"`, and `type="number"` for basic HTML5 validation.
- **Non-editable Results Display**: Implements a readonly `<input>` or `<span>` for displaying the calculation results.

### JavaScript Functionalities (Using jQuery)

- **Field Validations**: Custom validation logic for email format, null checks, special characters, and length validation.
- **Dynamic Error Messaging**: Shows specific error messages below each input field without using pop-ups.
- **Conditional Button Activation**: Disables/enables the login button based on the validation status of input fields.
- **Arithmetic Operations**: Implements add, subtract, multiply, and divide operations using a single arrow function, triggered by button clicks.
- **DOM Manipulation**: Updates the UI to display error messages and calculation results dynamically.

### CSS Functionalities

- **Styling Forms**: Custom styles for form elements, including input fields and buttons.
- **Error Highlighting**: Styles for displaying error messages in red below the input fields.
- **Responsive Layout**: Basic responsive design to ensure usability across various devices and screen sizes.

## Part B: Simple Stopwatch Web Application

### Overview

The Stopwatch Web Application uses Async, Await, Promises, `setInterval`, and `clearInterval` to offer a basic stopwatch functionality on a single page.

### HTML Functionalities

- **Time Display**: Uses a `<label>` for showing the stopwatch time in "HH:MM:SS" format.
- **Date Selection**: Incorporates an `<input type="date">` for choosing dates, with restrictions on editable content.
- **Control Buttons**: Includes buttons for starting, stopping, and resetting the stopwatch.

### JavaScript Functionalities

- **Async/Await and Promises**: Manages asynchronous operations for time updates and controls.
- **Time Manipulation**: Utilizes `setInterval` for incrementing the stopwatch time and `clearInterval` for pausing.
- **Date Handling**: JavaScript to control the date picker functionality, allowing selection of past and future dates.
- **Event Handling**: Attaches event listeners to buttons for starting, stopping, and resetting the stopwatch.

### CSS Functionalities

- **Styling**: Custom styles for the stopwatch display, buttons, and date picker.
- **Layout**: Uses CSS to arrange the time display, date picker, and buttons in a user-friendly manner.
- **Visual Feedback**: Styles for active/inactive states of control buttons to provide visual feedback to the user.

