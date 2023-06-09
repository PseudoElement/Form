export function validateName() {
     const nameInput = document.getElementById("name");
     const nameValue = nameInput.value.trim();

     if (nameValue === "") {
          nameInput.nextElementSibling.innerText = "Обязательное поле";
          return false;
     }

     if (nameValue.length < 2 || nameValue.length > 25) {
          nameInput.nextElementSibling.innerText = "Имя должно быть от 2 до 25 символов";
          return false;
     }

     nameInput.nextElementSibling.innerText = "";
     return true;
}
