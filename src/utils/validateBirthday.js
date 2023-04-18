export function validateBirthday() {
     const birthdayInput = document.getElementById("birthday");
     const birthdayValue = new Date(birthdayInput.value);
     const today = new Date();

     if (isNaN(birthdayValue.getTime())) {
          birthdayInput.nextElementSibling.innerText = "Введите вашу дату рождения";
          return false;
     }

     if (birthdayValue >= today) {
          birthdayInput.nextElementSibling.innerText = "Неверная дата рождения";
          return false;
     }

     birthdayInput.nextElementSibling.innerText = "";
     return true;
}
