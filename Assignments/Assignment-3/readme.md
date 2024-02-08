# Table CheckList Web Application

Table CheckList is a simple web application that allows you to manage and track student records in a table format. It provides features for adding new students, editing student details, and selecting multiple students for deletion.

## Usage

The Table CheckList application provides the following functionality:

- Viewing a table of student records with checkboxes and drop-down details.
- Adding new students by clicking the "Add New Student" button.
- Selecting one or more students by checking the checkboxes, which enables the "Delete" and "Edit" options.
- Deleting selected students by clicking the "Delete" button.
- Editing student details by clicking the "Edit" button (you can implement your edit logic).
- Updating student details using the edit popup.
- Closing the edit popup by clicking the "Cancel" button.

## Functionality

This section provides an overview of the main JavaScript functions used in the application:

- `eventListeners()`: Adds event listeners to checkboxes and images for dropdown details.
- `addNewStudent()`: Adds a new student row to the table.
- `toggleDeleteEditColumns(checkbox)`: Toggles the visibility of "Delete" and "Edit" columns when checkboxes are clicked.
- `toggleDropDown(image)`: Toggles the visibility of drop-down details when images are clicked.
- `deleteRow(button)`: Deletes a selected row and its corresponding drop-down details.
- `editRow(button)`: Opens the edit popup for editing student details.
- `showEditPopup(studentNumber, row)`: Displays the edit popup with student details.
- `hideEditPopup()`: Hides the edit popup.
- Event listeners for buttons and edit functionality.
