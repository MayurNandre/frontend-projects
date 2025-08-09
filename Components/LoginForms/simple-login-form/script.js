//Validation code for inputs
let email = document.forms['form']['email'];
let password = document.forms['form']['password'];
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

email.addEventListener('textInput',emailVerify);
password.addEventListener('textInput',passwordVerify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        passwordError.style.display = "block";
        password.focus();
        return false;
    }
}
function emailVerify(){
    if(email.value.length >= 8){
        email.style.border = "2px solid green";
        emailError.style.display = "none";
        return true;
    }else{
        password.style.border = "1px solid red";
    }
}
function passwordVerify(){
    if(password.value.length >= 6){
        password.style.border = "2px solid green";
        passwordError.style.display = "none";
        return true;
    }else{
        password.style.border = "1px solid red";
    }
}
