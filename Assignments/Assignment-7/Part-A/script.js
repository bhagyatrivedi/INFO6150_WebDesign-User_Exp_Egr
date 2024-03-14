$(document).ready(function () {
 
    const email = $("#email");
    const uname = $("#username");
    const password1 = $("#password");
    const pssword2 = $("#confirmPassword");
    const errorEmail = $("#errorEmail");
    const errorUsername = $("#errorUsername");
    const errorPassword = $("#errorPassword");
    const errorConfirmPassword = $("#errorConfirmPassword");
    const submit = $("#loginButton");


    function checkEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@northeastern.edu$/;
        console.log(emailRegex.test(email));
        return emailRegex.test(email);
    }



    function checkEmlLength(input, minLength, maxLength) {
        const inputVal = input.val().trim();
        return inputVal.length >= minLength && inputVal.length <= maxLength;
    }



    function displayEmailError(input, errorElement, message) {
        errorElement.text(message);
        input.addClass("error");
    }



    function removeEmailError(input, errorElement) {
        errorElement.text("");
        input.removeClass("error");
    }


    email.on("input", function () {
        if (!checkEmail(email.val())) {
            displayEmailError(email, errorEmail, "Please enter your Northeastern email ID!");
        } else {
            removeEmailError(email, errorEmail);
        }
        checkForm();
    });


    uname.on("input", function () {
        if (!checkEmlLength(uname, 3, 20)) {
            displayEmailError(uname, errorUsername, "Username should be between 3 and 20 characters!");
        } else {
            removeEmailError(uname, errorUsername);
        }
        checkForm();
    });


  
    password1.on("input", function () {
        if (!checkEmlLength(password1, 8, 20)) {
            displayEmailError(password1, errorPassword, "Password should be between 8 and 20 characters!");
        } else {
            removeEmailError(password1, errorPassword);
        }
        checkForm();
    });


    pssword2.on("input", function () {
        if (pssword2.val() !== password1.val()) {
            displayEmailError(pssword2, errorConfirmPassword, "Passwords do not match!");
        } else {
            removeEmailError(pssword2, errorConfirmPassword);
        }
        checkForm();
    });
   
    submit.on("click", function (event) {
        event.preventDefault();

       
        if (checkForm()) {
            
            console.log("Form is valid");
            window.location.href = "calculator.html";
        }
    });

    function checkForm() {
        const isValid =
            checkEmail(email.val()) &&
            checkEmlLength(uname, 3, 20) &&
            checkEmlLength(password1, 6, 20) &&
            pssword2.val() === password1.val();

        submit.prop("disabled", !isValid);

        if (isValid) {
            submit.prop("disabled", false); 
        } else {
            submit.prop("disabled", true); 
        }

        return isValid;

    }
    submit.on("click", function (event) {
        event.preventDefault();

        if (checkForm()) {
            const username = uname.val();
            window.location.href = `calculator.html?username=${username}`;
        }
    });


});