$(document).ready(function () {
    //initialisatioon form elements
    const inputEmail = $("#email");
    const inputUsername = $("#username");
    const inputPassword = $("#password");
    const inputConfirmPassword = $("#confirmPassword");
    const errorEmail = $("#errorEmail");
    const errorUsername = $("#errorUsername");
    const errorPassword = $("#errorPassword");
    const errorConfirmPassword = $("#errorConfirmPassword");
    const submitButton = $("#loginButton");

    //validation for email
    function validateEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@northeastern.edu$/;
        console.log(emailRegex.test(email));
        return emailRegex.test(email);
    }


    //validation for email input length
    function validateEmailLength(input, minLength, maxLength) {
        const inputVal = input.val().trim();
        return inputVal.length >= minLength && inputVal.length <= maxLength;
    }


    //error message for email
    function displayEmailError(input, errorElement, message) {
        errorElement.text(message);
        input.addClass("error");
    }


    //function to remove error message
    function removeEmailError(input, errorElement) {
        errorElement.text("");
        input.removeClass("error");
    }


    //validate to check if email is valid on change
    inputEmail.on("input", function () {
        if (!validateEmail(inputEmail.val())) {
            displayEmailError(inputEmail, errorEmail, "Please enter a NEU email address");
        } else {
            removeEmailError(inputEmail, errorEmail);
        }
        validateForm();
    });


    //validate username on input change
    inputUsername.on("input", function () {
        if (!validateEmailLength(inputUsername, 3, 20)) {
            displayEmailError(inputUsername, errorUsername, "Username should be between 3 and 20 characters");
        } else {
            removeEmailError(inputUsername, errorUsername);
        }
        validateForm();
    });


    //validate password on input change
    inputPassword.on("input", function () {
        if (!validateEmailLength(inputPassword, 6, 20)) {
            displayEmailError(inputPassword, errorPassword, "Password should be between 6 and 20 characters");
        } else {
            removeEmailError(inputPassword, errorPassword);
        }
        validateForm();
    });


    //validate confirm password on input change
    inputConfirmPassword.on("input", function () {
        if (inputConfirmPassword.val() !== inputPassword.val()) {
            displayEmailError(inputConfirmPassword, errorConfirmPassword, "Passwords do not match");
        } else {
            removeEmailError(inputConfirmPassword, errorConfirmPassword);
        }
        validateForm();
    });
    // Bind a click event to the submit button
    submitButton.on("click", function (event) {
        console.log("Form in summm");

        // Prevent the default form submission
        event.preventDefault();

        // Validate the form
        if (validateForm()) {
            // Redirect after successful validation
            console.log("Form is valid");
            window.location.href = "calculator.html";
        }
    });

    //validate form on submit and enable disable submit button
    function validateForm() {
        const isValid =
            validateEmail(inputEmail.val()) &&
            validateEmailLength(inputUsername, 3, 20) &&
            validateEmailLength(inputPassword, 6, 20) &&
            inputConfirmPassword.val() === inputPassword.val();

        submitButton.prop("disabled", !isValid);

        if (isValid) {
            submitButton.prop("disabled", false); // Enable the "Login" button
        } else {
            submitButton.prop("disabled", true); // Disable the "Login" button
        }

        return isValid;

    }
    submitButton.on("click", function (event) {
        event.preventDefault();

        if (validateForm()) {
            const username = inputUsername.val();
            window.location.href = `calculator.html?username=${username}`;
        }
    });


});