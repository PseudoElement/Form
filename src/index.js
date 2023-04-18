import { validateBirthday, validateConfirmation, validateEmail, validateName, validatePassword, validateSurname } from "./utils/index.js";

const birthdayInput = document.getElementById("birthday");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
     event.preventDefault();

     const isNameValid = validateName();
     const isSurnameValid = validateSurname();
     const isBirthdayValid = validateBirthday();
     const isEmailValid = validateEmail();
     const isPasswordValid = validatePassword();
     const isPasswordConfirmValid = validateConfirmation();

     if (isNameValid && isSurnameValid && isBirthdayValid && isEmailValid && isPasswordValid && isPasswordConfirmValid) {
          const data = {
               name: nameInput.value.trim(),
               surname: surnameInput.value.trim(),
               birthday: birthdayInput.value,
               email: emailInput.value.trim(),
               password: passwordInput.value.trim(),
          };

          console.log(data);

          fetch("https://jsonplaceholder.typicode.com/posts", {
               method: "POST",
               body: JSON.stringify(data),
          });
     }
});
