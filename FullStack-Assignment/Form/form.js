document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("myForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Submit clicked");

    let isValid = true;

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    console.log({ username, email, password, confirmPassword });


    formMessage.textContent = "";
    formMessage.style.color = "";

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (username === "") {
      document.getElementById("usernameError").innerText = "This field is required";
      console.log("Username missing");
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").innerText = "This field is required";
      console.log("Email missing");
      isValid = false;
    }

    if (password === "") {
      document.getElementById("passwordError").innerText = "This field is required";
      console.log("Password missing");
      isValid = false;
    } else if (password.length !== 6) {
      document.getElementById("passwordError").innerText = "Password must be 6 characters";
      console.log("Password length invalid");
      isValid = false;
    }

    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").innerText = "This field is required";
      console.log("Confirm password missing");
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
      console.log("Password mismatch");
      isValid = false;
    }

    if (isValid) {
      console.log("Form is valid");
      formMessage.textContent = "Form submitted successfully!";
      formMessage.style.color = "green";
    } else {
      console.log("Form has errors");
      formMessage.textContent = "";
      formMessage.style.color = "red";
    }

    if (isValid) {
      alert("Form submitted successfully");
      console.log("Form submitted successfully");
      formMessage.style.color = "green";
    }
    return isValid;
  });

});

