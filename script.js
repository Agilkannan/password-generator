const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()-_+=[]{}/?';:.,<>";

const lengthEL = document.getElementById("length");
const lowercaseEL = document.getElementById("lowercase");
const uppercaseEL = document.getElementById("uppercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const button = document.getElementById("Generate");
const passwordEL = document.getElementById("password");

button.addEventListener('click', function () {
    const length = parseInt(lengthEL.value, 10); // Convert string to integer
    let character = "";
    let password = "";

    if (lowercaseEL.checked) {
        character += lowercase;
    }

    if (uppercaseEL.checked) {
        character += uppercase;
    }

    if (numbersEL.checked) {
        character += numbers;
    }

    if (symbolsEL.checked) {
        character += symbols;
    }

    if (character === "") {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += character.charAt(Math.floor(Math.random() * character.length));
    }

    passwordEL.value = password;
});
