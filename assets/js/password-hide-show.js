/*=====================
  12. Password hide/show js
==========================*/

const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.getElementById("password");
eyeoff.style.display = "none";
eye.style.display = "block";

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";
  passwordField.setAttribute('type', 'password');
});
eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";
  passwordField.setAttribute('type', 'text');
});


const eye2 = document.querySelector(".feather-eye2");
const eyeoff2 = document.querySelector(".feather-eye-off2");
const passwordField2 = document.getElementById("password2");
eyeoff2.style.display = "none";
eye2.style.display = "block";

eyeoff2.addEventListener("click", () => {
  eyeoff2.style.display = "none";
  eye2.style.display = "block";
  passwordField2.setAttribute('type', 'password');
});
eye2.addEventListener("click", () => {
  eye2.style.display = "none";
  eyeoff2.style.display = "block";
  passwordField2.setAttribute('type', 'text');
});

// confirm password js

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (password.value == password2.value) {
    window.location.href = "login.html";
    return true;
  }

  if (password === "" || password2 === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== password2) {
    alert("Passwords do not match.");
    return false;
  }
});
