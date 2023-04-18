export function validateEmail() {
     const emailInput = document.getElementById("email");
     const emailValue = emailInput.value.trim();
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailPattern.test(emailValue)) {
          emailInput.nextElementSibling.innerText = "Введите корректный email";
          return false;
     }

     emailInput.nextElementSibling.innerText = "";
     return true;
}
