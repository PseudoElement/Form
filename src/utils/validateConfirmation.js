export function validateConfirmation() {
     const passwordInput = document.getElementById("password");
     const confirmPasswordInput = document.getElementById("confirm-password");

     if (passwordInput.value !== confirmPasswordInput.value) {
          confirmPasswordInput.nextElementSibling.innerText = "Пароли не совпадают";
          return false;
     }

     confirmPasswordInput.nextElementSibling.innerText = "";
     return true;
}
