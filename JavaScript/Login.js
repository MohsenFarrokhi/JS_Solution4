let inputUserName = document.getElementById('username');
console.log(inputUserName);
let inputEmail = document.getElementById('email')
console.log(inputEmail);
let inputPassword = document.getElementById('password')
console.log(inputPassword);

inputUserName.addEventListener('change', checkUserName);
function checkUserName() {
    let regexUserName = /^[a-zA-Z]+([\s-_.][a-zA-Z]+)*$/
    if (regexUserName.test(inputUserName.value)) {
        console.log("True");

    } else if (regexUserName) {
        console.log("False")
        alert("Please input your Username correctly")
    }
}

inputEmail.addEventListener('change', checkEmail);
function checkEmail() {
    let regexEmail = /^\w+@\w*\.\w+$/
    if (regexEmail.test(inputEmail.value)) {
        console.log("True");

    } else if (regexEmail) {
        console.log("False")
        alert("Please input your Email correctly")
    }
}

inputPassword.addEventListener('change', checkPassword);
function checkPassword() {
    let regexPassword = /^\w{8,}$/
    if (regexPassword.test(inputPassword.value)) {
        console.log("True");

    } else if (regexPassword) {
        console.log("False")
        alert("Please input your Password correctly")
    }
}