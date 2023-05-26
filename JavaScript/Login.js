let inputUserName = document.getElementById('username');
console.log(inputUserName);
let noticeUserName = document.getElementById('username-notice')

let inputEmail = document.getElementById('email')
console.log(inputEmail);
let noticeEmail = document.getElementById('email-notice')

let inputPassword = document.getElementById('password')
console.log(inputPassword);
let noticePassword = document.getElementById('password-notice')


inputUserName.addEventListener('change', checkUserName);
function checkUserName() {
    let regexUserName = /^[a-zA-Z]+([\s-_.][a-zA-Z]+)*$/

    if (regexUserName.test(inputUserName.value)) {
        console.log("True");
        inputUserName.style.border = "none";
        noticeUserName.textContent = "";
    } else if (regexUserName) {
        console.log("False")
        inputUserName.style.border = "2px solid red";
        noticeUserName.textContent = "Invalid username. Please enter a valid Username.";
    }
}

inputEmail.addEventListener('change', checkEmail);
function checkEmail() {
    let regexEmail = /^\w+@\w*\.\w+$/
    if (regexEmail.test(inputEmail.value)) {
        console.log("True");
       inputEmail.style.border = "none";
        noticeEmail.textContent = "";
    } else if (regexEmail) {
        console.log("False")
        inputEmail.style.border = "2px solid red";
        noticeEmail.textContent = "Invalid username. Please enter a valid Email.";
    }
}

inputPassword.addEventListener('change', checkPassword);
function checkPassword() {
    let regexPassword = /^\w{8,}$/
    if (regexPassword.test(inputPassword.value)) {
        console.log("True");
        inputPassword.style.border = "none";
        noticePassword.textContent = "";
    } else if (regexPassword) {
        console.log("False")
        inputPassword.style.border = "2px solid red";
        noticePassword.textContent = "Invalid username. Please enter a valid Password.";
    }
}