export function validateSurname() {
     const surnameInput = document.getElementById("surname");
     const surnameValue = surnameInput.value.trim();

     if (surnameValue === "") {
          surnameInput.nextElementSibling.innerText = "Обязательное поле";
          return false;
     }

     if (surnameValue.length < 2 || surnameValue.length > 25) {
          surnameInput.nextElementSibling.innerText = "Фамилия должна быть от 2 до 25 символов";
          return false;
     }

     surnameInput.nextElementSibling.innerText = "";
     return true;
}
