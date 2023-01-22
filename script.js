let firstName = document.querySelector("#first_name");
let errorFirstName = document.querySelector('#first_name_error');
firstName.style.borderColor = 'black';

let lastName = document.querySelector("#last_name");
let errorLastName = document.querySelector('#last_name_error');
lastName.style.borderColor = 'black';

let email = document.querySelector("#email");
let errorEmail = document.querySelector('#email_error');
email.style.borderColor = 'black';


let x = document.querySelector("#phone_number");
let errorX = document.querySelector('#phone_number_error');
x.style.borderColor = 'black';

let password = document.querySelector("#password");
let correct_password = document.querySelector("#correct_password");
password.style.borderColor = 'black';

let confirm_password = document.querySelector("#confirm_password");
let password_error = document.querySelector('#password_error');
confirm_password.style.borderColor = 'black';

firstName.addEventListener('input', (e)=>{
    if(!firstName.checkValidity()) {
        errorFirstName.style.visibility = "visible";
        firstName.style.borderColor = 'red';
    } else {
        errorFirstName.style.visibility = 'hidden';
        firstName.style.borderColor = 'black';
    }
});


lastName.addEventListener('input', (e)=>{
    if(!lastName.checkValidity()) {
        errorLastName.style.visibility = "visible";
        lastName.style.borderColor = 'red';
    } else {
        errorLastName.style.visibility = 'hidden';
        lastName.style.borderColor = 'black';
    }
});

email.addEventListener('input', (e)=>{
    if(!email.checkValidity()) {
        errorEmail.style.visibility = "visible";
        email.style.borderColor = 'red';
    } else {
        errorEmail.style.visibility = 'hidden';
        email.style.borderColor = 'black';
    }
});



x.addEventListener('input', (e)=>{
    if(!x.checkValidity()) {
        errorX.style.visibility = "visible";
        x.style.borderColor = 'red';
    } else {
        errorX.style.visibility = 'hidden';
        x.style.borderColor = 'black';
    }
});

password.addEventListener('input', (e)=>{
    if(!password.checkValidity()) {
        correct_password.style.visibility = "visible";
        password.style.borderColor = 'red';
    } else {
        correct_password.style.visibility = 'hidden';
        password.style.borderColor = 'black';
    }
});

confirm_password.addEventListener('input', (e)=>{
    if (confirm_password.value != password.value) {
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";
        password_error.style.visibility = "visible";
    } else {
        password.style.borderColor = "black";
        confirm_password.style.borderColor = "black";
        password_error.style.visibility = "hidden";
    }
});

