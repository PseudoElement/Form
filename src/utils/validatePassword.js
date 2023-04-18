export function validatePassword() {
     const passwordInput = document.getElementById("password");
     const passwordValue = passwordInput.value.trim();
     const specCharsPattern = /[!@#$%]/;
     const digitPattern = /[1-9]/;
     const uppercasePattern = /[A-Z]/;

     if (passwordValue.length < 8) {
          passwordInput.nextElementSibling.innerText = "Пароль должен содержать не менее 8 символов";
          return false;
     }

     if (!uppercasePattern.test(passwordValue)) {
          passwordInput.nextElementSibling.innerText = "Пароль должен содержать хотя бы одну заглавную букву";
          return false;
     }

     if (!digitPattern.test(passwordValue)) {
          passwordInput.nextElementSibling.innerText = "Пароль должен содержать хотя бы одну цифру";
          return false;
     }

     if (!specCharsPattern.test(passwordValue)) {
          passwordInput.nextElementSibling.innerText = "Пароль должен содержать хотя бы один из специальных символов !@#$%";
          return false;
     }

     passwordInput.nextElementSibling.innerText = "";
     return true;
}
